import React from "react";
import Products from "../components/main/Products";
import Slider from "../components/2-slider/Slider";
import Category from "../components/category/Category";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import TrendingProducts from "../components/TrendingProjects/TrendingProducts";
import Toprated from "../components/TopRated/Toprated";
import Dealoftheday from "../components/bestSellers/DealOfTheDay";
import Testimonial from "../components/Testimonial/Testimonial";
import FashionCards from "../components/FashionCards/FashionCards";
const HomePage = () => {
  return (
    <div>
      <Slider />

      <Category />

      <NewArrivals />
      <TrendingProducts />
      <Toprated />
      <Products />
      <Dealoftheday />
      <Testimonial />
      <FashionCards />
    </div>
  );
};

export default HomePage;
