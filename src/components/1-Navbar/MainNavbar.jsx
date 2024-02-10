import { useState, useContext } from "react";

import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,

  useTheme,
  Badge,

} from "@mui/material";

import {
  DarkModeOutlined,

  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));



const MainNavbar = () => {

  const products = useSelector((state) => state.cart.products);

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#555843",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        height: "70px",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          alignContent={"center"}
          sx={{
            paddingTop: "9px",
          }}
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
                  sx={{ fontSize: "25px", color: "#fff", marginRight: "10px" }}
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
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "25px",
              mx: 1,
              color: "#fff",
              marginRight: "10px",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "25px",
              color: "#fff",
              marginRight: "10px",
            }}
          />
          <Person2OutlinedIcon
            sx={{
              fontSize: "25px",
              color: "#fff",
              marginRight: "10px",
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
  );
};

export default MainNavbar;
