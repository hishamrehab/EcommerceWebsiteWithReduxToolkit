import React from "react";
import "./DaealOfTheDay.css";
import { Swiper, SwiperSlide } from "swiper/react";
const Dealoftheday = () => {
  return (
    <div className="sellers-Section">
      <div className="bestSellers"></div>

      <div className="deal-of-the-day">
        <Swiper className="mySwiper">
          <SwiperSlide >
            <img src="../../../images/products/shampoo.jpg" />
        
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Dealoftheday;
