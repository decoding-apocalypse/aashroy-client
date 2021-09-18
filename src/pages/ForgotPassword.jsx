import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./css/ForgotPassword.module.css";

const ForgotPassword = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <img src="/img/forgotpassword.svg" alt="Login" />
        </div>
        <div className={styles.right}>
          <h2>Forgot Password</h2>
          <p>
            Enter your email, we will send you a link to reset your password
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              className={styles.email}
              required
            />
            <button className={styles.loginBtn}>Continue</button>
          </form>
          <Link to="/login">Back to login</Link>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
