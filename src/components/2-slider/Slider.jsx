import React from "react";
import "./Slider.scss";
// import SLiderItem from "./SliderItem";
import { sliders } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import { Container } from "react-bootstrap";
const Slider = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      {sliders.map((slider) => {
        return (
          <SwiperSlide className="swiper-slide">
            <img src={slider.image} alt="banner img" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">{slider.bannerSubtitle}</p>
              <h2 className="banner-title">{slider.bannerTitle}</h2>
              <p className="banner-text">
                Starting at &dollar <b>{slider.price}</b>
                .00
              </p>
              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>{" "}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
