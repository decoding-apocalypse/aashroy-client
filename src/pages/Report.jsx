import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./css/Report.css";
import CustomChatbot from "../components/Chatbot/CustomChatbot";
import axios from "axios";

const Report = (props) => {
  const [reportData, setReportData] = useState(null);

  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const history = useHistory();

  const handleReportData = (data) => {
    setReportData((prevData) => ({ ...prevData, ...data }));
  };

  useEffect(() => {
    if (reportData?.location) {
      const query = reportData.location;
      const URL = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API}&query=${query}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => ({
          latitude: data.data[0].latitude,
          longitude: data.data[0].longitude,
          place: data.data[0].label,
          country: data.data[0].country,
          state: data.data[0].region,
        }))
        .then((data) => {
          axios.post(`${process.env.REACT_APP_API_URL}/feedback/report`, {
            location: data,
            complaint: reportData.report,
          });
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [reportData]);

  const handleFeedbackData = (e) => {
    setFeedbackData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitFeedback = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/feedback`, {
        name: feedbackData.name,
        email: feedbackData.email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.push("/");
  };

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
            name="name"
            value={feedbackData.name}
            onChange={handleFeedbackData}
            placeholder="Name"
            required
          />

          <input
            type="text"
            className="fname"
            name="email"
            value={feedbackData.email}
            onChange={handleFeedbackData}
            placeholder="E-Mail"
            required
          />

          <input
            type="text"
            className="fname"
            name="feedback"
            value={feedbackData.feedback}
            onChange={handleFeedbackData}
            placeholder="Please give your valuable feedback"
          />

          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={handleSubmitFeedback}
          />
        </form>
      </div>
      <CustomChatbot updateData={handleReportData} />
    </main>
  );
};

export default Report;
