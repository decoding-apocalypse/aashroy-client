import React, { useEffect, useRef } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "400px",
    height: "500px",
    floating: true,
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#bfa2db",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#bfa2db",
    botFontColor: "#fff",
    botFontSize: "23px",
    userFontSize: "23px",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const ChatModalStyles = {
    display: "block",
    position: "fixed",
    bottom: "100px",
    right: "32px",
    padding: "3rem 1.5rem",
    background: "#ab96ff",
    color: "white",
    zIndex: "100",
    fontSize: "1.2rem",
    borderRadius: "12px",
    boxShadow: "2px 2px 20px rgb(0,0,0,0.2)",
    fontWeight: "700",
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Asking options to report",
    },
    {
      id: "Asking options to report",
      message: "Hi, Please click on what you want to report today!",
      trigger: "Displaying options to report",
    },
    {
      id: "Displaying options to report",
      options: [
        {
          value: "crimes",
          label: "Crimes",
          trigger: "Asking for crimes in your locality",
        },
        {
          value: "Illegal Activities",
          label: "Illegal Activities",
          trigger: "Illegal Activities report",
        },
      ],
    },
    {
      id: "Illegal Activities report",
      message: "Enter your complaint against Illegal activities",
      trigger: "Illegal Activities Complaint",
    },
    {
      id: "Illegal Activities Complaint",
      user: true,
      validator: (value) => {
        // eslint-disable-next-line
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          props.updateData({ report: value });
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "Location",
    },
    {
      id: "Location",
      message: "Please Enter your exact location or nearby landmark",
      trigger: "Entering location",
    },
    {
      id: "Entering location",
      user: true,
      validator: (value) => {
        // eslint-disable-next-line
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          props.updateData({ location: value });
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "Thankyou",
    },
    {
      id: "Asking for crimes in your locality",
      message: "Please enter your complaint against Crimes..",
      trigger: "Illegal Activities Complaint",
    },

    {
      id: "Thankyou",
      message:
        "Thankyou! for your complaint. We are working hard to look into your complaint",
      trigger: "Done",
    },

    {
      id: "Done",
      message: "Have a great day !!",
      end: true,
    },
  ];

  const divRef = useRef();

  useEffect(() => {
    const timerId = setTimeout(() => {
      divRef.current.style.display = "none";
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div ref={divRef} style={ChatModalStyles}>
        Send me your Complaint
      </div>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
