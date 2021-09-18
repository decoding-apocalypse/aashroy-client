import React from "react";

import "./css/Card.css";

const Card = (props) => {
  const { name, links, img } = props;
  return (
    <div className="Card">
      <div className="Card-img">
        <img src={"/img/team/" + img} alt={name} />
      </div>
      <div className="Card-details">
        <div className="Card-details-name">{name}</div>
        <div className="Card-details-links">
          <a target="_blank" rel="noreferrer" href={links.github}>
            <img src="/img/icons/github.png" alt="Github" />
          </a>
          <a target="_blank" rel="noreferrer" href={links.linkedin}>
            <img src="/img/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a target="_blank" rel="noreferrer" href={links.facebook}>
            <img src="/img/icons/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
