import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import { DonationContextProvider } from "./context/DonationContext/DonationContext";

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <DonationContextProvider>
        <App />
      </DonationContextProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
