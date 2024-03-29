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
import SideBar from "../sidebar/SideBar";
import { Divider } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Container } from "react-bootstrap";
import "./Navbar.scss";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { useContext } from "react";

import { useSelector } from "react-redux";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";

import { Badge } from "@mui/material";

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
    <Container>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid hsl(0, 0%, 93%)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          <Link to="/">
            <img src={logo} width={"120px"} />
          </Link>{" "}
          <Box
            sx={{
              color: "#000",
            }}
          >
            <SideBar />
          </Box>
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
              // id="menu-appbar"
              anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left",
              // }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "left",
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Nav
                  className="me-auto"
                  style={{
                    color: "#000",
                    width: "100%",
                    backgroundColor: "none",
                  }}
                >
                  <Button
                    href="/products"
                    sx={{
                      color: "#000",
                      fontSize: "19px",
                      width: "100%",
                      display: "block",
                      borderBottom: "1px solid #777",
                      textAlign: "center",
                    }}
                  >
                    All Products
                  </Button>

                  <Button
                    href="/electronics"
                    sx={{
                      color: "#000",
                      fontSize: "19px",
                      width: "100%",
                      display: "block",
                      borderBottom: "1px solid #777",
                      textAlign: "center",
                      "&:hover": {
                        color: "#777",
                      },
                    }}
                  >
                    electronics
                  </Button>

                  <Button
                    href="jewelery"
                    sx={{
                      color: "#000",
                      fontSize: "19px",
                      width: "100%",
                      display: "block",
                      borderBottom: "1px solid #777",
                      textAlign: "center",
                      "&:hover": {
                        color: "#777",
                      },
                    }}
                  >
                    jewelery
                  </Button>

                  <Button
                    href="men"
                    sx={{
                      color: "#000",
                      fontSize: "19px",
                      width: "100%",
                      display: "block",
                      borderBottom: "1px solid #777",
                      textAlign: "center",
                      "&:hover": {
                        color: "#777",
                      },
                    }}
                  >
                    men's clothing
                  </Button>

                  <Button
                    href="women"
                    sx={{
                      color: "#000",
                      fontSize: "19px",
                      width: "100%",
                      display: "block",

                      textAlign: "center",
                      "&:hover": {
                        color: "#777",
                      },
                    }}
                  >
                    women's clothing
                  </Button>
                </Nav>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
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
    </Container>
  );
}
export default Navbar;
