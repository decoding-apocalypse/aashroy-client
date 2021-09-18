// React imports
import React, { Suspense, lazy, useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Style Imports
import "./App.css";

// Component imports
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/AuthContext/AuthContext";

import axios from "axios";
import { sessionLoginCall } from "./apiCalls";

// Pages imports
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Donation = lazy(() => import("./pages/Donation"));
const Money = lazy(() => import("./pages/Money"));
const Stuffs = lazy(() => import("./pages/Stuffs"));
const Publicaware = lazy(() => import("./pages/Publicaware"));
const Developer = lazy(() => import("./pages/Developer"));
const Report = lazy(() => import("./pages/Report"));
const Upload = lazy(() => import("./pages/Upload"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const Logout = lazy(() => import("./pages/Logout"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  axios.defaults.withCredentials = true;
  const { user, dispatchAuthState } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("/users/login")
      .then((res) => {
        if (res.data.isLoggedIn) {
          sessionLoginCall(res.data.user, dispatchAuthState);
        }
      })
      .catch();
  }, [dispatchAuthState]);
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home title="Home | Aakanksha" />
          </Route>

          <Route exact path="/developers">
            <Developer title="Developers | Aakanksha" />
          </Route>

          <Route exact path="/donation">
            <Donation title="Donation | Aakanksha" />
          </Route>

          <Route exact path="/donation/money">
            {user ? (
              <Money title="Donate Money | Aakanksha" />
            ) : (
              <Signup title="Signup | Aakanksha" />
            )}
          </Route>

          <Route exact path="/donation/stuffs">
            {user ? (
              <Stuffs title="Donate Stuffs | Aakanksha" />
            ) : (
              <Signup title="Signup | Aakanksha" />
            )}
          </Route>

          <Route exact path="/public-awareness">
            <Publicaware title="Public Awareness | Aakanksha" />
          </Route>

          <Route exact path="/about">
            <AboutUs title="AboutUs | Aakanksha" />
          </Route>

          <Route exact path="/report">
            <Report title="Report | Aakanksha" />
          </Route>

          <Route exact path="/upload">
            <Upload title="Upload | Aakanksha" />
          </Route>

          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <Login title="Login | Aakanksha" />}
          </Route>

          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <Signup title="Signup | Aakanksha" />}
          </Route>

          <Route exact path="/logout">
            {user ? (
              <Redirect to="/" />
            ) : (
              <Logout title="Logging out | Aakanksha" />
            )}
          </Route>

          <Route exact path="/profile">
            <Profile title="Profile | Aakanksha" />
          </Route>

          <Route exact path="/forgotpassword">
            <ForgotPassword title="Forgot Password | Aakanksha" />
          </Route>

          <Route exact path="/edit">
            <EditProfile title="EditProfile | Aakanksha" />
          </Route>

          <Route path="/">
            <Error404 title="Oops Error | Aakanksha" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
