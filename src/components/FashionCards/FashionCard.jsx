import React from "react";
import "./FashionCards.scss";
const FashionCard = ({ img, desc, title, admin }) => {
  return (
    <div className="fashion-card">
      <img src={img} alt="image" className="fashion-card-img" />
      <p className="fashion-card-title">{title}</p>
      <h6 className="fashion-card-desc">{desc}</h6>
      <p className="fashion-card-admin">{admin}</p>
    </div>
  );
};

export default FashionCard;
