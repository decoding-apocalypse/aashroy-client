import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Cookies from "js-cookie";

import "./css/EditProfile.css";

const EditProfile = (props) => {
  const [imageSelected, setImageSelected] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    name: user.name,
    address: user.address,
    phoneNo: user.phoneNo || "",
    dateOfBirth: user.dateOfBirth || new Date(2000, 0, 2),
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

  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      fetch(url, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(userDetails);
          return axios.put(
            `${process.env.REACT_APP_API_URL}/users/${user._id}`,
            { ...userDetails, profileImg: data.url }
          );
        })
        .then((res) => {
          console.log(res.data);
          Cookies.set("user", JSON.stringify(res.data));
          window.location.href = "/profile";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
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
    }
  };

  // const uploadSelectedHandler = () => {
  //   if (imageSelected) {
  //     const formData = new FormData();
  //     formData.append("file", imageSelected);
  //     formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  //     fetch(url, {
  //       method: "post",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProfileImgUrl(data.url);
  //       });
  //   }
  // };

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

  return (
    <main id="EditProfile">
      <h1 className="edit-heading">Edit Profile</h1>
      <div className="edit-content">
        <img
          src={previewSource || user.profileImg || "/img/user.png"}
          alt="profile Img"
        />
      </div>
      <div className="user-img">
        <input
          id="profile-img-inp"
          type="file"
          accept="image/*"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
            previewFile(event.target.files[0]);
          }}
        />
        <label htmlFor="profile-img-inp" id="profile-img-inp-label">
          <span id="label-text">Choose a file:</span>{" "}
          <strong>
            {imageSelected == null ? "None" : imageSelected?.name}
          </strong>
        </label>
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
