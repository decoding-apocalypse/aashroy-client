import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../context/AuthContext/AuthContext";

import Map from "../components/Map";
import SuccessMsg from "../components/SuccessMsg";

import "./css/Upload.css";

const UploadDefaultState = {
  location: { lat: null, lng: null },
  imgUrl: "",
  descrip: "",
  username: "",
  userId: "",
};

const Upload = (props) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    setUploadData((prevData) => ({
      ...prevData,
      username: user.username,
      userId: user._id,
    }));
  }, [user._id, user.username]);

  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  const [imageSelected, setImageSelected] = useState(null);
  const [uploadData, setUploadData] = useState(UploadDefaultState);
  const [previewSource, setPreviewSource] = useState();
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handelingMapData = (lat, lng) => {
    setUploadData((previousData) => ({
      ...previousData,
      location: { lat, lng },
    }));
  };

  // setImageSelected()
  const uploadSelectedHandler = () => {
    if (imageSelected && uploadData.location.lat !== null) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      fetch(url, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setUploadData((previousData) => ({
            ...previousData,
            imgUrl: data.url,
          }));
        });
      setPreviewSource(null);
      setImageSelected(null);
      // setUploadData(UploadDefaultState);
      setIsSuccess(true);
      setError("");
    } else if (imageSelected && uploadData.location.lat === null) {
      setError("Select a location");
    } else {
      setError("Image not selected");
    }
  };

  useEffect(() => {
    if (uploadData.imgUrl.length > 0) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, uploadData)
        .then((res) => {
          history.push("/");
          setUploadData(UploadDefaultState);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [uploadData.imgUrl, history, uploadData]);

  const previewFile = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
    } else {
      setPreviewSource(null);
    }
  };

  const handleUserInputChange = (e) => {
    setUploadData((prevData) => ({
      ...prevData,
      descrip: e.target.value,
    }));
  };

  // console.log(uploadData);

  if (isSuccess) {
    return (
      <SuccessMsg
        message="Thank you for sending us the data"
        subMsg="Your small help will surely make big change for the betterment of the society."
      />
    );
  }

  return (
    <main>
      <h2>Please Select Location</h2>
      {!user ? (
        <p className="uploadErrorMsg">You must Sign-Up/Login to Upload</p>
      ) : (
        ""
      )}
      {error ? <p className="uploadErrorMsg">{error}</p> : ""}
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
                <div>
                  Choosen file:{" "}
                  <div className="uploadImgName">
                    {imageSelected == null ? "None" : imageSelected?.name}
                  </div>
                </div>
              </div>
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: "300px", width: "max-content" }}
                />
              )}
              <input
                id="text-type-inp"
                type="text"
                placeholder="Description"
                value={uploadData.descrip}
                onChange={handleUserInputChange}
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
