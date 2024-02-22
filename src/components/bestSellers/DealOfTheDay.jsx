import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import { bestsellers } from "../../data";

import "swiper/css";

import "./DaealOfTheDay.css";
import { Container } from "react-bootstrap";

const Dealoftheday = () => {
  const [value, setValue] = React.useState(4);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        gap: "30px",
        paddingRight: "5%",
        paddingLeft: "5%",
      }}
    >
      <div
        className="bestsellers"
        style={{
          width: "35%",
        }}
      >
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
                <img src={sale.image} alt="" width={"80px"} />
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
        <Swiper
          className="mySwiper"
          style={{
            borderRadius: "10px",
            marginBottom: "50px",
            border: "1px solid hsl(0, 0%, 93%)",
          }}
        >
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <img src="../../../images/products/shampoo.jpg" />

              <div
                className="swiperSlide-info"
                style={{
                  mixWidth: "60%",
                  paddingRight: "15px",
                }}
              >
                <Rating
                  name="read-only"
                  value={4}
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
                  SHAMPOO, CONDITIONER & FACEWASH PACKS
                </h5>
                <p
                  style={{
                    color: "#777",
                    fontSize: "17px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>
                <div className="prices">
                  <span
                    className="price"
                    style={{
                      color: "hsl(353, 100%, 78)",
                      fontSize: "22px",
                      marginRight: "12px",
                    }}
                  >
                    15.00$
                  </span>
                  <span>
                    <del>23.22$</del>
                  </span>
                  <h6
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    HURRY UP! OFFER ENDS IN:
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Dealoftheday;
