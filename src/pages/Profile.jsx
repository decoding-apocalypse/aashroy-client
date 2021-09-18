import React, { useEffect } from "react";

import "./css/Profile.css";

const AboutUs = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="Profile">
      <div className="page">
        <div className="cover"></div>
        <div className="top-area">
          <div className="profilepic">
            <img classNmae="pp" src="img/profilepic.jpg" alt="Profile"></img>
          </div>
          <br></br>
          <span>Jay Mehta</span>
          <hr></hr>
        </div>

        <div className="details">
          <div className="buttons-collection">
            <button className="buttons">Personal</button>
            <button className="buttons">Donations</button>
            <button className="buttons">Edit</button>
            <button className="buttons">Awards</button>
            <button className="buttons">Helps</button>
          </div>
          <div className="information">
            <br></br>
            <span>Account Holder Name : </span>{" "}
            <b>
              <span>Jay Mehta</span>
            </b>
            <br></br>
            <br></br>
            <span>Phone Number : </span>{" "}
            <b>
              <span>+919863481022</span>
            </b>
            <br></br>
            <br></br>
            <span>Address : </span>{" "}
            <b>
              <span>Silchar, Assam</span>
            </b>
            <br></br>
            <br></br>
            <span>Age : </span>{" "}
            <b>
              <span>19Years Old</span>
            </b>
            <br></br>
            <br></br>
            <span>Date of Birth : </span>{" "}
            <b>
              <span>5th June, 2002</span>
            </b>
            <br></br>
            <br></br>
            <span>Bio : </span>{" "}
            <b>
              <span>I am Jay Mehta. Hello World!</span>
            </b>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
