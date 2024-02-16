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
import { useTheme } from "@emotion/react";
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
  const theme = useTheme();

  const products = useSelector((state) => state.cart.products);

  const colorMode = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "tomato",
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
            <img
              src="https://authorize.chec.io/images/chec.logo.dark.png"
              width={"120px"}
              height={"40px"}
            />

            <Typography
              sx={{
                color: "#474F7A",
                fontWeight: "bold",
                fontSize: "20px",
                display: "block",
                marginLeft: "5px",
              }}
            >
              Ecommerce
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
                  }}
                >
                  All Products
                </Link>
                <Link
                  to="/electronics"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  electronics
                </Link>
                <Link
                  to="jewelery"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  jewelery
                </Link>
                <Link
                  to="men"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
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
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              color: theme.palette.color,
              display: "block",
              bgcolor: theme.palette.bg,
            }}
          >
            <Nav className="me-auto ">
              <Link
                to="/products"
                className="text-light"
                style={{
                  fontSize: { xs: "1", sm: "1", md: "1.1" },
                }}
              >
                All Products
              </Link>
              <Link
                to="/electronics"
                className="text-light"
                style={{
                  fontSize: "1.1em",
                }}
              >
                electronics
              </Link>
              <Link to="jewelery" className="text-light">
                jewelery
              </Link>
              <Link
                to="/men"
                className="text-light"
                style={{
                  fontSize: "1.1em",
                }}
              >
                men's
              </Link>

              <Link
                to="/women"
                className="text-light"
                style={{
                  fontSize: "1em",
                  color: "red",
                }}
              >
                women's
              </Link>
            </Nav>
          </Button>
        </Box>
      </Toolbar>

      <Box
        sx={{
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Box flexGrow={1} />

            <Box>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined
                    sx={{
                      fontSize: "25px",
                      color: "#fff",
                      marginRight: "10px",
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined
                    sx={{ fontSize: "25px", marginRight: "10px" }}
                  />
                </IconButton>
              )}
            </Box>

            <TwitterIcon
              sx={{
                fontSize: "25px",
                color: "#fff",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <FacebookIcon
              sx={{
                fontSize: "25px",
                mx: 1,
                color: "#fff",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: "25px",
                color: "#fff",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <Person2OutlinedIcon
              sx={{
                fontSize: "25px",
                color: "#fff",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <IconButton aria-label="cart">
              <Link to="cart">
                <StyledBadge
                  badgeContent={products.length > 0 ? products.length : "0"}
                  color="secondary"
                >
                  <ShoppingCartIcon
                    sx={{
                      fontSize: "35px",
                      color: "#fff",
                    }}
                  />
                </StyledBadge>
              </Link>
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </AppBar>
  );
}
export default Navbar;
