import React, { useState } from "react";
import "./css/Report.css";
import CustomChatbot from "../components/Chatbot/CustomChatbot";

const Report = (props) => {
  const [reportData, setReportData] = useState(null);

  const handleReportData = (data) => {
    setReportData((prevData) => ({ ...prevData, ...data }));
  };

  console.log(reportData);

  return (
    <main className="report">
      <div className="report-content">
        <h1>Online Complaint Portal</h1>
      </div>
      <div className="reportContainer">
        <div className="report-main">
          <p>
            The only place where your complaints are precious to us! If you have
            a complaint or want to report a crime or any illegal atrocities
            against the helpless, please feel free to report through an
            anonymous reporting mechanism where we try to help and build the
            society through your hands. <br />
            You can also share your valuable feedback to us which can help us to
            serve the community better.
          </p>
          <button type="button" className="btn btn-outline-info">
            Complaint Now
          </button>
        </div>
        <div className="report-bg">
          <img src="/img/report-bg-1.png" alt="nothing" />
        </div>
      </div>

      <div className="report-form">
        <h3 className="form-heading">Feedback Form for Aashroy</h3>
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
            placeholder="Please give your valuable feedback"
          />

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
      <CustomChatbot updateData={handleReportData} />
    </main>
  );
};

export default Report;
