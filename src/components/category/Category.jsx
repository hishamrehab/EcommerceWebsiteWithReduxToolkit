import React from "react";
import dress from "../../../images/icons/dress.svg";
import "./Category.scss";
import { categories }from "../../data";
const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((category) => {
            return (
              <div className="category-item" key={category.id}>
                <div className="category-img-box">
                  <img src={category.image} alt="dress & frock" width={"30"} />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{category.title}</h3>
                    <div className="p-category-item-amount">
                      ({category.amount})
                    </div>
                    <a href="#" className="category-btn">
                      Show all
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
