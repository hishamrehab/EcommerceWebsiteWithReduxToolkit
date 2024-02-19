import React from "react";
import "./Slider.scss";
// import SLiderItem from "./SliderItem";
import { sliders } from "../../data";
const Slider = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {sliders.map((slider) => {
            return (
              <div className="slider-item">
                <img
                  src={slider.image}
                  alt="banner img"
                  className="banner-img"
                />
                <div className="banner-content">
                  <p className="banner-subtitle">
                    {slider.bannerSubtitle}
                    <h2 className="banner-title">{slider.bannerTitle}</h2>
                    <p className="banner-text">
                      Starting at &dollar <b>{slider.price}</b>
                      .00
                    </p>
                    <a href="#" className="banner-btn">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
