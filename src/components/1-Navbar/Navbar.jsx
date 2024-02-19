import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import logo from "../../../images/logo/logo.svg";
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid hsl(0, 0%, 93%)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Link to="/">
          <img src={logo} width={"120px"} />
        </Link>

        <Box flexGrow={1} />

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Nav
                className="me-auto"
                style={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
                <Link to="/products" className="text-dark">
                  All Products
                </Link>
                <Link to="/electronics" className="text-dark">
                  electronics
                </Link>
                <Link to="jewelery" className="text-dark">
                  jewelery
                </Link>
                <Link to="men" className="text-dark">
                  men's clothing
                </Link>
                <Link to="women" className="text-dark">
                  women's clothing
                </Link>
              </Nav>
            </MenuItem>
          </Menu>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },

            fontSize: "25px",
          }}
        >
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              fontSize: "17px",
            }}
          >
            <Link to="/products" className="text-dark">
              All Products
            </Link>
            <Link to="/electronics" className="text-dark">
              electronics
            </Link>
            <Link to="jewelery" className="text-dark ">
              jewelery
            </Link>
            <Link to="/men" className="text-dark">
              men's
            </Link>

            <Link to="/women" className="text-dark">
              women's
            </Link>
          </Nav>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
