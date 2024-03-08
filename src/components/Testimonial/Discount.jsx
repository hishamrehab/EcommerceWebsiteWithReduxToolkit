import React from "react";
import "./Discount.scss";
import banner from "../../../images/products/cta-banner.jpg";
import { Container } from "react-bootstrap";
const Discount = () => {
  return (
    <Container>
      <div
        className="category-banner">
        <img src={banner} className="category-banner-img" />
        <div className="category-banner-info">
          <button className="category-banner-discount">25% DISCOUNT</button>
          <h2 className="category-banner-collection">Summer Collection</h2>
          <p className="category-banner-price">Starting @ $10</p>
          <button className="category-banner-button">SHOP NOW</button>
        </div>
      </div>
    </Container>
  );
};

export default Discount;
