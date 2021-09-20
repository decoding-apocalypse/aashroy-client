import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { donationListCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { DonationContext } from "../context/DonationContext/DonationContext";

import styles from "./css/Profile.module.css";

const Profile = (props) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = props.title;
  }, [props.title, user._id]);

  const { error, donations, isFetching, dispatchDonationState } = useContext(
    DonationContext
  );

  useEffect(() => {
    donationListCall(user._id, dispatchDonationState);
  }, [dispatchDonationState, user._id]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(`${e.target.hash}`);
    if (element) {
      document.querySelector("#informationCard").childNodes.forEach((card) => {
        card.classList.add("hide");
        card.classList.remove("show");
      });
      element.classList.add("show");
      element.classList.remove("hide");
    }
  };

  if (user) {
    return (
      <main className={styles.Profile}>
        <div className={styles.page}>
          <div className={styles.cover}></div>
          <div className={styles.topArea}>
            <div className={styles.profilepic}>
              <img
                className={styles.pp}
                src={user.profileImg || "img/profilepic.jpg"}
                alt={user.name}
              ></img>
            </div>
            <br></br>
            <span>{user.name}</span>
            <hr></hr>
          </div>

          <div className={styles.details}>
            <div className={styles.buttonsCollection}>
              <a
                className={styles.buttons}
                onClick={handleClick}
                href="#personal"
              >
                Personal
              </a>
              <a
                className={styles.buttons}
                onClick={handleClick}
                href="#donations"
              >
                Donations
              </a>
              <a
                className={styles.buttons}
                onClick={handleClick}
                href="#awards"
              >
                Awards
              </a>
              <a
                className={styles.buttons}
                onClick={handleClick}
                href="#uploads"
              >
                Help
              </a>
              <a
                className={styles.buttons}
                onClick={handleClick}
                href="#contacts"
              >
                Contacts
              </a>
            </div>
          </div>
          <div id="informationCard">
            <div className={`${styles.information} show`} id="personal">
              <br></br>
              <h1>Personal Details</h1>
              <br></br>

              <span>Name : </span>
              <b>
                <span>{user.name}</span>
              </b>
              <br></br>
              <br></br>
              <span>Email : </span>
              <b>
                <span>{user.email}</span>
              </b>
              <br></br>
              <br></br>
              <span>Username : </span>
              <b>
                <span>{user.username}</span>
              </b>
              <br></br>
              <br></br>
              <span>Phone Number : </span>
              <b>
                <span>{user.phoneNo || ""}</span>
              </b>
              <br></br>
              <br></br>
              <span>Address : </span>
              <b>
                <span>{user.address}</span>
              </b>
              <br></br>
              <br></br>
              <span>Date of Birth : </span>
              <b>
                <span>{new Date(user.dateOfBirth).toLocaleDateString()}</span>
              </b>
              <br></br>
              <br></br>
              <span>Bio : </span>
              <b>
                <span>{user.bio}</span>
              </b>
              <br></br>
              <br></br>
              <div className={styles.editBtn}>
                <Link to="/profile/edit">Edit Details</Link>
              </div>
            </div>

            <div className={styles.information} id="donations">
              {isFetching || error ? (
                ""
              ) : donations && donations.length > 0 ? (
                <div className={`${styles.donations}`}>
                  {donations &&
                    donations.map((d) => (
                      <div key={d._id} className={styles.donationCards}>
                        <br></br>
                        <h5>Amount</h5>
                        <h3>₹ {d.amount}</h3>
                        <div className={styles.donationdate}>
                          <p>Date: {new Date(d.date).toLocaleString()}</p>
                          <p>
                            Transaction ID:{" "}
                            {d.transactionID.substring(0, 10) + "..."}
                          </p>
                          <p>From: {user.name}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className={styles.msg}>
                  You haven't made any donations yet :(
                </div>
              )}
            </div>

            <div className={styles.information} id="awards">
              <div className={` ${styles.awards}`}>
                <div className={styles.awardCards}>
                  <div className={styles.awardImg}></div>
                  <h3>Award Name</h3>
                </div>
                <div className={styles.awardCards}>
                  <div className={styles.awardImg}></div>
                  <h3>Award Name</h3>
                </div>
                <div className={styles.awardCards}>
                  <div className={styles.awardImg}></div>
                  <h3>Award Name</h3>
                </div>
                <div className={styles.awardCards}>
                  <div className={styles.awardImg}></div>
                  <h3>Award Name</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <Redirect to="/" />;
};

export default Profile;
