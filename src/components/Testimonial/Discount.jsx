import React from "react";
import "./Discount.scss";
const Discount = () => {
  return (
    <div className="category-banner">
      <img
        src="../../../images/products/cta-banner.jpg"
        className="category-banner-img"
      />
      <div className="category-banner-info">
        <button className="category-banner-discount">25% DISCOUNT</button>
        <h2 className="category-banner-collection">Summer Collection</h2>
        <p className="category-banner-price">Starting @ $10</p>
        <button className="category-banner-button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Discount;
