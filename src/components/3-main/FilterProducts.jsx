import React from "react";
import { useState, useEffect } from "react";
const FilterProducts = () => {


  return (
    <div>
      {categories.map((cat) => {
        return (
          <button
            key={cat}
            onClick={() => {
              getProductsInCategory(cat);
            }}
            className="btn btn-info"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default FilterProducts;
