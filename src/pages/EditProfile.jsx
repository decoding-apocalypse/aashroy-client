import React, { useEffect } from "react";

import styles from "./css/Profile.module.css";

const Profile = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className={styles.Profile}>
      <div className={styles.page}>
        <div className={styles.cover}></div>
        <div className={styles.topArea}>
          <div className={styles.profilepic}>
            <img
              classNmae={styles.pp}
              src="img/profilepic.jpg"
              alt="picturess"
            ></img>
          </div>
          <br></br>
          <span>Jay Mehta</span>
          <hr></hr>
        </div>

        <div className={styles.details}>
          <div className={styles.buttonsCollection}>
            <a className={styles.buttons} href="#personal">
              Personal
            </a>
            <a className={styles.buttons} href="#donations">
              Donations
            </a>
            <a className={styles.buttons} href="#awards">
              Awards
            </a>
            <a className={styles.buttons} href="#uploads">
              Help
            </a>
            <a className={styles.buttons} href="#contacts">
              Contacts
            </a>
          </div>
        </div>

        <div className={styles.information} id="personal">
          <br></br>
          <h1>Personal Details</h1>
          <br></br>

          <span>Account Holder Name : </span>
          <b>
            <span>Jay Mehta</span>
          </b>
          <br></br>
          <br></br>
          <span>Phone Number : </span>
          <b>
            <span>+919863481022</span>
          </b>
          <br></br>
          <br></br>
          <span>Address : </span>
          <b>
            <span>Silchar, Assam</span>
          </b>
          <br></br>
          <br></br>
          <span>Age : </span>
          <b>
            <span>19Years Old</span>
          </b>
          <br></br>
          <br></br>
          <span>Date of Birth : </span>
          <b>
            <span>5th June, 2002</span>
          </b>
          <br></br>
          <br></br>
          <span>Bio : </span>
          <b>
            <span>I am Jay Mehta. Hello World!</span>
          </b>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className={styles.information} id={styles.donations}>
        <div className={styles.donationCards}>
          <br></br>
          <h5>Amount</h5>
          <h3>₹ 1000</h3>
          <div className={styles.donationdate}>
            <p>Date:</p>
            <p>Transaction ID:</p>
            <p>From:</p>
          </div>
        </div>
        <div className={styles.donationCards}>
          <br></br>
          <h5>Amount</h5>
          <h3>₹ 1000</h3>
          <div className={styles.donationdate}>
            <p>Date:</p>
            <p>Transaction ID:</p>
            <p>From:</p>
          </div>
        </div>
        <div className={styles.donationCards}>
          <br></br>
          <h5>Amount</h5>
          <h3>₹ 1000</h3>
          <div className={styles.donationdate}>
            <p>Date:</p>
            <p>Transaction ID:</p>
            <p>From:</p>
          </div>
        </div>
        <div className={styles.donationCards}>
          <br></br>
          <h5>Amount</h5>
          <h3>$ 1000</h3>
          <div className={styles.donationdate}>
            <p>Date:</p>
            <p>Transaction ID:</p>
            <p>From:</p>
          </div>
        </div>
      </div>

      <div className={styles.information} id={styles.awards}>
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
  );
};

export default Profile;
