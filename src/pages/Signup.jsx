import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { googleLoginCall, signupCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext/AuthContext";

import Loader from "../components/Loader";

import styles from "./css/Signup.module.css";
import { GoogleLogin } from "react-google-login";

const Signup = (props) => {
  // new

  const { isFetching, error, dispatchAuthState } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleUserData = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConf } = userData;
    signupCall({ name, email, password, passwordConf }, dispatchAuthState);
  };

  const googleSuccess = (res) => {
    googleLoginCall(res, dispatchAuthState);
    // console.log(res);
  };
  const googleFailure = () => {
    console.log("Failure :(");
  };

  return (
    <main className={styles.signup}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={styles.signupContainer}>
          <div className={styles.left}>
            <img src="/img/signup.svg" alt="Login" />
          </div>
          <div className={styles.right}>
            <h2>Sign In</h2>
            {error ? (
              error.message ? (
                <p className={styles.errorMsg}>{error.message}</p>
              ) : (
                <p className={styles.errorMsg}>
                  Oops! Some internal error occured
                </p>
              )
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleUserData}
                placeholder="Enter Name"
                className={styles.name}
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserData}
                placeholder="Enter E-mail"
                className={styles.email}
                required
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleUserData}
                placeholder="Enter password"
                className={styles.password}
                required
                minLength="8"
              />
              <input
                type="password"
                name="passwordConf"
                value={userData.passwordConf}
                onChange={handleUserData}
                placeholder="Confirm password"
                className={styles.password}
                required
                minLength="8"
              />
              <button className={styles.loginBtn}>Signup</button>
            </form>
            <p>
              Already signup? <Link to="/login">Login</Link>
            </p>
            <div className={styles.externalLinks}>
              <span className={styles.text}>
                or signup using your Google Account
              </span>
              <span className={styles.icons}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <img src="/img/icons/google.png" alt="Google" />
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Signup;
