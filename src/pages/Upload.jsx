import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Map from "../components/Map";
import { AuthContext } from "../context/AuthContext/AuthContext";

import "./css/Upload.css";

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

  return (
    <main>
      <h2>Please Select Location</h2>
      {!user ? (
        <p className="uploadErrorMsg">You must Sign-Up/Login to Upload</p>
      ) : (
        ""
      )}
      <div id="location-map">{location && <Map location={location} />}</div>
      <div id="upload-img">
        <div id="upload-btn">
          {user ? (
            <button>
              <img src="img/photo.png" alt="Upload" /> Upload
            </button>
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
