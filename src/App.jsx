import { CssBaseline, ThemeProvider } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/cartpage/CartPage";

import HomePage from "./pages/HomePage.jsx";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JeweleryPage from "./pages/JeweleryPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import Menpage from "./pages/Menpage";
import WomenPage from "./pages/WomenPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import SecondNavbar from "./components/Navbar/SecondNavbar";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="app">
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <SecondNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/jewelery" element={<JeweleryPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<Menpage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
