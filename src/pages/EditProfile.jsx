import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

import "./css/EditProfile.css";

const EditProfile = (props) => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main id="EditProfile">
      <h1 className="edit-heading">Edit Profile</h1>
      <div className="edit-content">
        <img src={user.profileImg || "/img/user.png"} alt="" srcset="" />
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
            value={user.name}
            placeholder="Name"
            required
          />
          
          <input
          type="tel"
          className="fname"
          placeholder="Phone Number"
          value={user.phoneNo}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
          />

          <input
            type="text"
            className="fname"
            value={user.address}
            placeholder="Address"
          />          

          <input
            type="date"
            className="fname"
            value={new Date(user.dateOfBirth).toISOString().split("T")[0]}
            placeholder="Date of birth"
          />
          <div>
            <input
              type="text"
              className="fname"
              value={user.bio}
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
