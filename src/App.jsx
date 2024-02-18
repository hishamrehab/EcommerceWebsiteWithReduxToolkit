import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/6-CartPage";

import HomePage from "./pages/1-HomePAGE.JSX";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JeweleryPage from "./pages/4-JeweleryPage";
import ElectronicsPage from "./pages/3-ElectronicsPage";
import Menpage from "./pages/5-Menpage";
import WomenPage from "./pages/7-WomenPage";
import Footer from "./components/4-Footer/Footer";
import SecondNavbar from "./components/1-Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/8-ProductDetail";
import AllProducts from "./pages/2-AllProducts";
import FirstNavbar from "./components/1-Navbar/FirstNavbar";
import ThirdNavbar from "./components/1-Navbar/ThirdNavbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <BrowserRouter>
            <FirstNavbar />
            <ThirdNavbar />
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
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
