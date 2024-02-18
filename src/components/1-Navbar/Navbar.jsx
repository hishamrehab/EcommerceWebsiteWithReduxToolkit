import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Stack, Badge } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products);

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
      }}
    >
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            variant="body2"
          >
            <Typography
              sx={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "20px",
                display: "block",
                marginLeft: "5px",
              }}
            >
              Ecommerce Website
            </Typography>
          </Box>
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
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{
                backgroundColor: "#8CB9BD",
                color: "black",
              }}
            >
              <Nav className="me-auto">
                <Link
                  to="/products"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                    marginRight: "10px",
                  }}
                >
                  All Products
                </Link>
                <Link
                  to="/electronics"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                    marginRight: "10px",
                  }}
                >
                  electronics
                </Link>
                <Link
                  to="jewelery"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                    marginRight: "10px",
                  }}
                >
                  jewelery
                </Link>
                <Link
                  to="men"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                    marginRight: "10px",
                  }}
                >
                  men's clothing
                </Link>
                <Link
                  to="women"
                  className="text-light"
                  style={{
                    fontSize: "1em",
                    color: "red",
                  }}
                >
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
          <Button onClick={handleCloseNavMenu}>
            <Nav
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap:"20px"
              }}
            >
              <Link
                to="/products"
                className="text-dark"
                style={{
                  fontSize: { xs: "1", sm: "1", md: "1.1" },
                  textDecoration: "none",
                }}
              >
                All Products
              </Link>
              <Link
                to="/electronics"
                className="text-dark"
                style={{
                  fontSize: "1.1em",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                electronics
              </Link>
              <Link
                to="jewelery"
                className="text-dark "
                style={{
                  textDecoration: "none",
                }}
              >
                jewelery
              </Link>
              <Link
                to="/men"
                className="text-dark"
                style={{
                  fontSize: "1.1em",
                  textDecoration: "none",
                }}
              >
                men's
              </Link>

              <Link
                to="/women"
                className="text-dark"
                style={{
                  fontSize: "1em",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                women's
              </Link>
            </Nav>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
