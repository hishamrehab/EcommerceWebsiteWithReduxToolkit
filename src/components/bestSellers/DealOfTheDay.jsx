import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import { bestsellers, dealoftheday } from "../../data";

import "swiper/css";

import "./DaealOfTheDay.css";
import { Container } from "react-bootstrap";
import FixeTimar from "./FixedTimar";
const Dealoftheday = () => {
  const [value, setValue] = React.useState(4);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding:"0 10px"
      }}
    >
      <div className="bestsellers">
        <h3 className="bestsellers-title">Best Sellers</h3>
        <div className="bestsellers-content">
          {bestsellers.map((sale) => {
            return (
              <div
                className="bestsellers-info"
                style={{
                  paddingLeft: "10px",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <img src={sale.image} alt="" width={"100px"} />
                <div>
                  <h4 className="subtitle">{sale.title}</h4>
                  <Rating
                    name="read-only"
                    value={sale.rating}
                    readOnly
                    className="rating"
                  />
                  <div className="prices">
                    <span className="price">{sale.price}$</span>
                    <span>
                      <del>{sale.deletedPrice}$</del>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-swipper">
        <h5
          style={{
            marginBottom: "15px",
            marginLeft: {
              xs: "20px",
              sm: "20px",
            },
          }}
        >
          Deal Of The Day
        </h5>
        <Swiper
          className="mySwiper"
          style={{
            borderRadius: "10px",
            marginBottom: "50px",
            border: "1px solid hsl(0, 0%, 93%)",
            height: {
              xs: "1500px",
              sm: "1500px",
            },
          }}
        >
          {dealoftheday.map((deal) => {
            return (
              <SwiperSlide key={deal.id}>
                <div
                  className="swiper-slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <img src={deal.image} />

                  <div
                    className="swiperSlide-info"
                    style={{
                      maxWidth: "60%",
                      paddingRight: "15px",
                      width: {
                        xs: "100%",
                        sm: "100%",
                      },
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={deal.rating}
                      readOnly
                      className="rating"
                      sx={{
                        marginBottom: "20px",
                      }}
                    />
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {deal.title}
                    </h5>
                    <p
                      style={{
                        color: "#777",
                        fontSize: "17px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                      dolor sit amet consectetur Lorem ipsum dolor
                    </p>
                    <div className="prices">
                      <span
                        className="price"
                        style={{
                          color: "hsl(353, 100%, 78)",
                          fontSize: "25px",
                          marginRight: "12px",
                          color: " hsl(353, 100%, 78%)",
                        }}
                      >
                        {deal.price}$
                      </span>
                      <span>
                        <del
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          {deal.delPrice}$
                        </del>
                      </span>
                      <h6
                        className="post"
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        HURRY UP! OFFER ENDS IN:
                      </h6>
                      <div
                        className="daley"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          marginTop: "10px",
                        }}
                      >
                        <FixeTimar time={"24"} name={"Hours"} />
                        <FixeTimar time={"59"} name={"Min"} />
                        <FixeTimar time={"00"} name={"Sec"} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Dealoftheday;
