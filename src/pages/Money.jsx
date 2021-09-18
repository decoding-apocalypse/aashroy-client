import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./css/Money.module.css";

const Money = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.money}>
      <h1 className="heading">The society needs your valuable contribution</h1>
      <div className={styles.row}>
        <Link to="/donation" className={styles.back}>
          Back
        </Link>
        <div className={styles.info}>
          <img src="/img/donate.jpg" alt="donate" />
          <p>
            We are proudly non-profit non-corporate and non-compromised. The
            kind donations made by you are directly invested for the betterment
            of the lower section of the society.
          </p>
        </div>
        <div className={styles.donate}>
          <h3>Donate now</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.frequency}>
              <div className={styles.inputGroup}>
                <label htmlFor="oneTime" className={styles.donationFrequency}>
                  One time
                </label>
                <input type="radio" name="frequency" id="oneTime" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="monthly" className={styles.donationFrequency}>
                  Monthly
                </label>
                <input type="radio" name="frequency" id="monthly" />
              </div>
            </div>
            <div className={styles.moneyBtnContainer}>
              <input
                type="button"
                value="50"
                name="amount"
                className={styles.moneyBtn}
              />
              <input
                type="button"
                value="100"
                name="amount"
                className={styles.moneyBtn}
              />
              <input
                type="button"
                value="500"
                name="amount"
                className={styles.moneyBtn}
              />
              <input
                type="button"
                value="1000"
                name="amount"
                className={styles.moneyBtn}
              />
              <input
                name="amount"
                type="number"
                min="1"
                max="10000"
                placeholder="&#8377; Other amount"
                className={styles.moneyBtn}
              />
            </div>
            <button className={styles.submitBtn} type="submit">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Money;
