import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { googleLoginCall, loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext/AuthContext";

import { GoogleLogin } from "react-google-login";

import Loader from "../components/Loader";
import styles from "./css/Login.module.css";

const Login = (props) => {
  // new
  const { isFetching, error, dispatchAuthState } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleUserInput = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    loginCall({ email, password }, dispatchAuthState);
  };

  const googleSuccess = (res) => {
    googleLoginCall(res, dispatchAuthState);
    // console.log(res);
  };
  const googleFailure = () => {
    console.log("Failure :(");
  };

  return (
    <main className={styles.login}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={styles.loginContainer}>
          <div className={styles.left}>
            <img src="/img/login.svg" alt="Login" />
            <Link to="/signup" className="msg">
              Create an account
            </Link>
          </div>
          <div className={styles.right}>
            <h2>Welcome Back</h2>
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
                type="email"
                name="email"
                value={userData.email}
                onChange={handleUserInput}
                placeholder="Your e-mail"
                className={styles.email}
                required
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleUserInput}
                placeholder="Your password"
                className={styles.password}
                required
                minLength="8"
              />
              <button className={styles.loginBtn}>Login</button>
            </form>
            <Link
              style={{ marginTop: "-2rem", marginBottom: "2rem" }}
              to="/forgotpassword"
            >
              Forgot password?
            </Link>
            <div className={styles.create}>
              <Link to="/signup" className="msg">
                Create an account
              </Link>
            </div>
            <div className={styles.externalLinks}>
              <span className={styles.text}>or login using Google Account</span>
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

export default Login;
