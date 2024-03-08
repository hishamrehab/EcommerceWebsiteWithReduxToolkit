import React from "react";
import "./faturedproducts.scss";
import { rating } from "../../data";
import { Container } from "react-bootstrap";
const Toprated = () => {
  return (
    <Container>
      <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title">Top Rated</h2>
        </div>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {rating.map((rate) => {
              return (
                <div className="showcase" key={rate.id}>
                  <a href="#" className="showcase-img-box">
                    <img
                      src={rate.image}
                      width={"70px"}
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{rate.title}</h4>
                    </a>
                    <a href="" className="showcase-category">
                      {rate.subtitle}
                    </a>
                    <div className="price">
                      <span>${rate.price}</span>
                      <del>${rate.deletedPrice}</del>
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

export default Toprated;
