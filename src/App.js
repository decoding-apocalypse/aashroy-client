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
import Cookies from "js-cookie";

import { sessionLoginCall } from "./apiCalls";

// Pages imports
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Donation = lazy(() => import("./pages/Donation"));
const Payment = lazy(() => import("./pages/Payment"));
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
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      sessionLoginCall(JSON.parse(cookieUser), dispatchAuthState);
    }
  }, [dispatchAuthState]);
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home title="Home | Aashroy" />
          </Route>

          <Route exact path="/developers">
            <Developer title="Developers | Aashroy" />
          </Route>

          <Route exact path="/donation">
            <Donation title="Donation | Aashroy" />
          </Route>

          <Route exact path="/donation/money">
            {user ? (
              <Money title="Donate Money | Aashroy" />
            ) : (
              <Signup title="Signup | Aashroy" />
            )}
          </Route>

          <Route exact path="/donation/money/payment">
            {user ? (
              <Payment title="Payment | Aashroy" />
            ) : (
              <Signup title="Signup | Aashroy" />
            )}
          </Route>

          <Route exact path="/donation/stuffs">
            {user ? (
              <Stuffs title="Donate Stuffs | Aashroy" />
            ) : (
              <Signup title="Signup | Aashroy" />
            )}
          </Route>

          <Route exact path="/public-awareness">
            <Publicaware title="Public Awareness | Aashroy" />
          </Route>

          <Route exact path="/about">
            <AboutUs title="AboutUs | Aashroy" />
          </Route>

          <Route exact path="/report">
            <Report title="Report | Aashroy" />
          </Route>

          <Route exact path="/upload">
            <Upload title="Upload | Aashroy" />
          </Route>

          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <Login title="Login | Aashroy" />}
          </Route>

          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <Signup title="Signup | Aashroy" />}
          </Route>

          <Route exact path="/logout">
            {user ? (
              <Redirect to="/" />
            ) : (
              <Logout title="Logging out | Aashroy" />
            )}
          </Route>

          <Route exact path="/profile">
            <Profile title="Profile | Aashroy" />
          </Route>

          <Route exact path="/forgotpassword">
            <ForgotPassword title="Forgot Password | Aashroy" />
          </Route>

          <Route exact path="/profile/edit">
            <EditProfile title="EditProfile | Aashroy" />
          </Route>

          <Route path="/">
            <Error404 title="Oops Error | Aashroy" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
