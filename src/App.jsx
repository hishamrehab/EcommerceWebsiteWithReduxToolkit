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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/8-ProductDetail";
import AllProducts from "./pages/2-AllProducts";
import Navbar from "./components/1-navbar/Navbar";
import SecondNavbar from "./components/1-navbar/SecondNavbar";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
