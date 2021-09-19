import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Map from "../components/Map";
import { AuthContext } from "../context/AuthContext/AuthContext";

import "./css/Upload.css";

const UploadDefaultState = {
  location: { lat: null, lng: null },
  imgUrl: "",
  descrip: "",
};

const Upload = (props) => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [location, setLocation] = useState({
    latitude: 28.70406,
    longitude: 77.102493,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  const [imageSelected, setImageSelected] = useState([]);
  // eslint-disable-next-line
  const [description, setDescripSelected] = useState();
  // eslint-disable-next-line
  const [uploadFiles, setUploadedFiles] = useState([]);
  const [uploadData, setUploadData] = useState(UploadDefaultState);
  const [previewSource, setPreviewSource] = useState();

  
  const handelingMapData = (lat, lng) => {
    setUploadData((previousData) => ({
      ...previousData,
      location: { lat, lng },
    }));
  };
  const uploadSelectedHandler = () => {
    setPreviewSource(null);
    descripSelectedHandler();
    setImageSelected(async (imageSelect) => {
      const formData = new FormData();
      formData.append("file", imageSelect);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      
      const res = await fetch(url, {
        method: "post",
        body: formData,
      });
      const resData = await res.json();
      // console.log(resData.url);
      setUploadData((previousData) => ({
        ...previousData,
        imgUrl: resData.url,
      }));
      setUploadedFiles((old) => [...old, resData]);
    });
  };
  
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  
  // eslint-disable-next-line
  const descripSelectedHandler = async () => {
    setDescripSelected((text) => {
      setUploadData((previousData) => ({
        ...previousData,
        descrip: text,
      }));
      // console.log(text);
    });
  };
  
  console.log(uploadData);
  
  return (
    <main>
      <h2>Please Select Location</h2>
      {!user ? (
        <p className="uploadErrorMsg">You must Sign-Up/Login to Upload</p>
      ) : (
        ""
      )}
      <div id="location-map">
        {location && <Map location={location} onMapData={handelingMapData} />}
      </div>
      <div id="upload-img">
        <div id="upload-btn">
          {user ? (
            <>
              <input
                id="file-type-inp"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                  previewFile(event.target.files[0]);
                }}
              />
              <label htmlFor="file-type-inp" id="file-type-inp-label">
                Choose a file
              </label>
              <div id="chooseFile">
                <div>Choosen file: {imageSelected.name == null ? "none" : imageSelected.name}</div>
              </div>
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: "300px", width: "300px" }}
                />
              )}
              <input
                id="text-type-inp"
                type="text"
                placeholder="description..."
                value={description}
                onChange={(event) => {
                  setDescripSelected(event.target.value);
                }}
              />
              <button onClick={uploadSelectedHandler}>
                <img id="upload-img-btn" src="img/photo.png" alt="Upload"></img>{" "}
                Upload
              </button>
            </>
          ) : (
            <Link to="/signup" className="uploadSignupBtn">
              Signup
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default Upload;
