import React from "react";
import "./FashionCards.scss";
import { Container } from "react-bootstrap";
const FashionCard = ({ img, desc, title, admin }) => {
  return (
    <Container>
      <div className="fashion-card">
        <img src={img} alt="image" className="fashion-card-img" />
        <p className="fashion-card-title">{title}</p>
        <h6 className="fashion-card-desc">{desc}</h6>
        <p className="fashion-card-admin">{admin}</p>
      </div>
    </Container>
  );
};

export default FashionCard;
