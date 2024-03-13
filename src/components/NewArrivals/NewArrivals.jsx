import React from "react";
import { arrivals } from "../../data";
import { Container } from "react-bootstrap";
const NewArrivals = () => {
  return (
    <Container>
      <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title">New Arrivals</h2>
        </div>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {arrivals.map((arrival) => {
              return (
                <div className="showcase" key={arrival.id}>
                  <a href="#" className="showcase-img-box">
                    <img
                      src={arrival.image}
                      width={"70px"}
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{arrival.title}</h4>
                    </a>
                    <a href="" className="showcase-category">
                      {arrival.subtitle}
                    </a>
                    <div className="price">
                      <span>${arrival.price}</span>
                      <del>${arrival.deletedPrice}</del>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrivals;
