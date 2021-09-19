import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./css/EditProfile.css";

const EditProfile = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="EditProfile">
      <h1 className="edit-heading">Edit Profile</h1>
      <div className="edit-content">
        <img src="/img/edit-user.jpg" alt="" srcset="" />
      </div>
      <div className="user-img">
        <Link to="/">Change Profile Picture</Link>
      </div>
      <div className="edit-form">
        <h3 className="form-heading">Edit your Details</h3>
        <form>
          <input
            type="text"
            className="fname"
            name="firstname"
            placeholder="Name"
            required
          />

          <input
            type="text"
            className="fname"
            name="email"
            placeholder="E-Mail"
            required
          />

          <input
            type="text"
            className="fname"
            name="lastname"
            placeholder="Update your bio"
          />

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
};
export default EditProfile;
