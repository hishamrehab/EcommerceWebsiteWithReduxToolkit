import React from "react";
import Products from "../components/3-main/Products";
import Slider from "../components/2-slider/Slider";
import Category from "../components/category/Category";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Products />
    </div>
  );
};

export default HomePage;
