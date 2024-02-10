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

function SecondNavbar() {
  const theme = useTheme();

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
     
        bgcolor: "tomato",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                mr: 2,
                p: "4px 10px",
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
                }}
              >
                Ecommerce
              </Typography>
            </Box>
          </a>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
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
                <Nav className="me-auto ">
                  <Nav.Link
                    href="electronics"
                    className="text-light"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    electronics
                  </Nav.Link>
                  <Nav.Link
                    href="jewelery"
                    className="text-light"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    jewelery
                  </Nav.Link>
                  <Nav.Link
                    href="men"
                    className="text-light"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    men's clothing
                  </Nav.Link>
                  <Nav.Link
                    href="women"
                    className="text-light"
                    style={{
                      fontSize: "1em",
                      color: "red",
                    }}
                  >
                    women's clothing
                  </Nav.Link>
                </Nav>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },marginRight:"5%" , fontSize:"25px"}}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: theme.palette.color,
                display: "block",
                bgcolor: theme.palette.bg,
              }}
            >
              <Nav className="me-auto ">
                <Nav.Link
                  href="electronics"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  electronics
                </Nav.Link>
                <Nav.Link
                  href="jewelery"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  jewelery
                </Nav.Link>
                <Nav.Link
                  href="men"
                  className="text-light"
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  men's clothing
                </Nav.Link>
                <Nav.Link
                  href="women"
                  className="text-light"
                  style={{
                    fontSize: "1em",
                    color: "red",
                  }}
                >
                  women's clothing
                </Nav.Link>
              </Nav>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SecondNavbar;
