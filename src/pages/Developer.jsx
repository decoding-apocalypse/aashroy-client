import React, { useEffect, useState } from "react";

// Component import
import Card from "../components/Card";

// Style imports
import styles from "./css/Developer.module.css";

const Developer = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db/team.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res.team);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={styles.root}>
      <div className={styles.bg}>
        <h1>Introducing to the Dev Team</h1>
      </div>
      <div className={styles.teamContainer}>
        {data &&
          data.map((d, i) => (
            <Card key={i} name={d.name} img={d.img} links={d.links} />
          ))}
      </div>
    </main>
  );
};

export default Developer;
