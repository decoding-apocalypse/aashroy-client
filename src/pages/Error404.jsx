import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./css/Error404.module.css";

const Error404 = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className={styles.Error404}>
      <div className={styles["error-main"]}>
        <div className={styles.fof}>
          <h1>Error 404</h1>
        </div>
      </div>
      <h4>Page not found</h4>
      <p>
        The page you are looking for doesn't exist or an other error occured.
        <br />
        <Link to="/">Go back to homepage.</Link>
      </p>
    </main>
  );
};

export default Error404;
