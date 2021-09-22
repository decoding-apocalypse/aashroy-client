import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Cookies from "js-cookie";

import "./css/EditProfile.css";

const EditProfile = (props) => {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    name: user.name,
    address: user.address,
    phoneNo: user.phoneNo,
    dateOfBirth: user.dateOfBirth,
    bio: user.bio,
    password: user.password,
    profileImg: user.profileImg,
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleChange = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${user._id}`, userDetails)
      .then((res) => {
        console.log(res.data);
        Cookies.set("user", JSON.stringify(res.data));
        window.location.href = "/profile";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main id="EditProfile">
      <h1 className="edit-heading">Edit Profile</h1>
      <div className="edit-content">
        <img src={user.profileImg || "/img/user.png"} alt="profile Img" />
      </div>
      <div className="user-img">
        <Link to="/">Change Profile Picture</Link>
      </div>
      <div className="edit-form">
        <h3 className="form-heading">Edit your Details</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="fname"
            value={userDetails.name}
            placeholder="Name"
            required
          />

          <input
            name="phoneNo"
            onChange={handleChange}
            type="tel"
            className="fname"
            placeholder="Phone Number"
            value={userDetails.phoneNo}
          />

          <input
            name="address"
            onChange={handleChange}
            type="text"
            className="fname"
            value={userDetails.address}
            placeholder="Address"
          />

          <input
            name="dateOfBirth"
            onChange={handleChange}
            type="date"
            className="fname"
            value={
              new Date(userDetails.dateOfBirth).toISOString().split("T")[0]
            }
            placeholder="Date of birth"
          />
          <div>
            <input
              name="bio"
              onChange={handleChange}
              type="text"
              className="fname"
              value={userDetails.bio}
              placeholder="Update your bio"
            />
          </div>

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
};
export default EditProfile;
