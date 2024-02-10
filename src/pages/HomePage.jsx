import React from "react";
import Products from "../components/3-main/Products";
import Slider from "../components/2-slider/Slider";
import MainNavbar from "../components/1-Navbar/MainNavbar";

const HomePage = () => {
  return (
    <div>
      <MainNavbar />

      <Slider />
      <Products />
    </div>
  );
};

export default HomePage;
