import React from "react";
import Products from "../components/3-main/Products";
import Slider from "../components/slider/Slider";
import Header1 from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header1 />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
