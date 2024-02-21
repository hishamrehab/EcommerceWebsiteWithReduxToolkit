import React from "react";
import Products from "../components/3-main/Products";
import Slider from "../components/2-slider/Slider";
import Category from "../components/category/Category";
import NewArrivals from "../components/FaturedProducts/NewArrivals";
import TrendingProducts from "../components/FaturedProducts/TrendingProducts";
import Toprated from "../components/FaturedProducts/Toprated";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Category />
      <NewArrivals />
      <TrendingProducts />
      <Toprated />
      <Products />
    </div>
  );
};

export default HomePage;
