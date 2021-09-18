import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

import styles from "./css/Donation.module.css";

const Donation = (props) => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className={styles.Donation}>
      <h1 className="heading">Donation</h1>
      {!user ? (
        <p className={styles.msg}>You must Sign-Up/Login to donate</p>
      ) : (
        ""
      )}
      <div className={styles.card}>
        <div className={styles.money}>
          <img src="/img/icons/money.png" alt="money" />
          <p>Donate money</p>
          <Link to="/donation/money">Donate</Link>
        </div>
        <div className={styles.stuffs}>
          <img src="/img/icons/stuffs.png" alt="stuffs" />
          <p>Donate food, clothes or medicines</p>
          <Link to="/donation/stuffs">Donate</Link>
        </div>
      </div>
    </main>
  );
};

export default Donation;
