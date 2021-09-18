import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
