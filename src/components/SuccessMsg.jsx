import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import styles from "./css/SuccessMsg.module.css";

const SuccessMsg = (props) => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRedirect(true);
    }, 3000);
  }, []);

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <main className={styles.Msg}>
      <h1>{props.message}</h1>
      <p>{props.subMsg}</p>
      <div>
        <svg
          version="1.1"
          id="loader-1"
          x="0px"
          y="0px"
          width="100px "
          height="100px"
          viewBox="0 0 50 50"
          style={{ enableBackground: "new 0 0 50 50", width: "5rem" }}
        >
          <path
            fill="var(--theme1-100)"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </main>
  );
};

export default SuccessMsg;
