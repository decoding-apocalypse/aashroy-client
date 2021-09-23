import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";

import { AuthContext } from "../context/AuthContext/AuthContext";

import axios from "axios";

import SuccessMsg from "../components/SuccessMsg";

import styles from "./css/Payment.module.css";

const Payment = (props) => {
  const searchParam = useLocation().search;

  const amount = new URLSearchParams(searchParam).get("amount");

  const DEFAULT_PAYMENT_INFO = {
    amount: +amount,
    cardNumber: "",
    cardHolder: "",
    expiry: {
      mm: "month",
      yy: "year",
    },
    cvv: "",
  };

  const { user } = useContext(AuthContext);

  const [paymentInfo, setPaymentInfo] = useState(DEFAULT_PAYMENT_INFO);

  const [isSuccess, setIsSuccess] = useState(false);

  const [error, setError] = useState("");

  const front = useRef();
  const back = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentInfo.cardNumber.length !== 16) {
      setError("Enter valid card number");
    } else if (paymentInfo.cardHolder.length === 0) {
      setError("Please enter card holder name");
    } else if (
      paymentInfo.expiry.mm === "month" ||
      paymentInfo.expiry.yy === "year"
    ) {
      setError("Enter valid expiry date");
    } else if (paymentInfo.cvv.length !== 3) {
      setError("Enter valid CVV");
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/donation/payment`, {
          amount: paymentInfo.amount,
          userId: user._id,
        })
        .then((res) => {
          if (res.data.success) {
            setError("");
            setIsSuccess(true);
            setPaymentInfo(DEFAULT_PAYMENT_INFO);
          } else {
            setError(res.data.message);
          }
        })
        .catch((err) => {
          setError(JSON.stringify(err));
        });
    }
  };

  const handleChange = (e) => {
    if (["mm", "yy"].includes(e.target.name)) {
      setPaymentInfo((prev) => ({
        ...prev,
        expiry: {
          ...prev.expiry,
          [e.target.name]: e.target.value,
        },
      }));
    } else {
      setPaymentInfo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleMouseEnter = (e) => {
    front.current.style.transform = "perspective(1000px) rotateY(-180deg)";
    back.current.style.transform = "perspective(1000px) rotateY(0deg)";
  };
  const handleMouseLeave = (e) => {
    front.current.style.transform = "perspective(1000px) rotateY(0deg)";
    back.current.style.transform = "perspective(1000px) rotateY(180deg)";
  };

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  if (isSuccess) {
    return (
      <SuccessMsg
        message="Thank you for donating for the special cause!"
        subMsg="Thank you for your generous gift to Aashroy. We are thrilled to have your support. Through your donation we have been able to accomplish the goal and continue working towards helping the homeless persons. "
      />
    );
  }

  if (amount) {
    return (
      <main className={styles.Payment}>
        <h1>Total Amount: &#8377; {amount}</h1>
        <span className={styles.error}>{error}</span>
        <div className={styles.container}>
          <div className={styles["card-container"]}>
            <div className={styles.front} ref={front}>
              <div className={styles.image}>
                <img src="/img/payment/chip.png" alt="" />
                <img src="/img/payment/visa.png" alt="" />
              </div>
              <div className={styles["card-number-box"]}>
                {paymentInfo.cardNumber.length
                  ? paymentInfo.cardNumber
                  : "################"}
              </div>
              <div className={styles.flexbox}>
                <div className={styles.box}>
                  <span>card holder</span>
                  <div className={styles["card-holder-name"]}>
                    {paymentInfo.cardHolder.length
                      ? paymentInfo.cardHolder
                      : "full name"}
                  </div>
                </div>
                <div className={styles.box}>
                  <span>expires</span>
                  <div className={styles.expiration}>
                    <span className={styles["exp-month"]}>
                      {paymentInfo.expiry.mm !== "month"
                        ? paymentInfo.expiry.mm + "/"
                        : "mm/"}
                    </span>
                    <span className={styles["exp-year"]}>
                      {paymentInfo.expiry.yy !== "year"
                        ? paymentInfo.expiry.yy
                        : "yyyy"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.back} ref={back}>
              <div className={styles.stripe}></div>
              <div className={styles.box}>
                <span>{paymentInfo.cvv.length ? paymentInfo.cvv : "cvv"}</span>
                <div className={styles["cvv-box"]}></div>
                <img src="/img/payment/visa.png" alt="" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <span>card number</span>
              <input
                type="text"
                maxLength="16"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleChange}
                className={styles["card-number-input"]}
              />
            </div>
            <div className={styles.inputBox}>
              <span>card holder</span>
              <input
                type="text"
                name="cardHolder"
                className={styles["card-holder-input"]}
                value={paymentInfo.cardHolder}
                onChange={handleChange}
              />
            </div>
            <div className={styles.flexbox}>
              <div className={styles.inputBox}>
                <span>expiration mm</span>
                <select
                  name="mm"
                  id=""
                  className={styles["month-input"]}
                  value={paymentInfo.expiry.mm}
                  onChange={handleChange}
                >
                  <option value="month" disabled>
                    month
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className={styles.inputBox}>
                <span>expiration yy</span>
                <select
                  name="yy"
                  id=""
                  value={paymentInfo.expiry.yy}
                  onChange={handleChange}
                  className={styles["year-input"]}
                >
                  <option value="year" disabled>
                    year
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
              <div className={styles.inputBox}>
                <span>cvv</span>
                <input
                  type="text"
                  maxLength="3"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={styles["cvv-input"]}
                />
              </div>
            </div>
            <input
              type="submit"
              value="submit"
              className={styles["submit-btn"]}
            />
          </form>
        </div>
      </main>
    );
  }

  return <Redirect to="/donation/money" />;
};

export default Payment;
