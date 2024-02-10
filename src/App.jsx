import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/CartPage";


import HomePage from "./pages/HomePAGE.JSX";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JeweleryPage from "./pages/JeweleryPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import Menpage from "./pages/Menpage";

import WomenPage from "./pages/WomenPage";
import Footer from "./components/4-Footer/Footer";
import SecondNavbar from "./components/1-Navbar/SecondNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "jewelery",
    element: <JeweleryPage />,
  },

  {
    path: "electronics",
    element: <ElectronicsPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },

  {
    path: "men",
    element: <Menpage />,
  },
  {
    path: "women",
    element: <WomenPage />,
  },
]);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
         <SecondNavbar />
          <RouterProvider router={router} />
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
