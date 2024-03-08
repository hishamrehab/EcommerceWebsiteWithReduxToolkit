import React from "react";
import "./faturedproducts.scss";
import { trending } from "../../data";
import { Container } from "react-bootstrap";
const TrendingProducts = () => {
  return (
    <Container>
      <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title">Trending</h2>
        </div>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {trending.map((trend) => {
              return (
                <div className="showcase" key={trend.id}>
                  <a href="#" className="showcase-img-box">
                    <img
                      src={trend.image}
                      width={"70px"}
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{trend.title}</h4>
                    </a>
                    <a href="" className="showcase-category">
                      {trend.subtitle}
                    </a>
                    <div className="price">
                      <span>${trend.price}</span>
                      <del>${trend.deletedPrice}</del>
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

export default TrendingProducts;
