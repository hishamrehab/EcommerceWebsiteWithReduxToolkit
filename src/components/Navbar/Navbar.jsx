import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Badge,
  InputBase,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
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

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#C7C8CC",
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
          <Link
            to="/"
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
                  marginLeft: "15px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
          EcommerceWebsite
              </Typography>
            </Box>
          </Link>

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
                  sx={{ fontSize: "20px", color: "#fff", marginRight: "7px" }}
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
                  sx={{ fontSize: "20px", marginRight: "7px" }}
                />
              </IconButton>
            )}
          </Box>

          <TwitterIcon
            sx={{
              fontSize: "22px",
              color: "#fff",
              marginRight: "7px",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "22px",
              mx: 1,
              color: "#fff",
              marginRight: "7px",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "22px",
              color: "#fff",
              marginRight: "7px",
            }}
          />

          <Person2OutlinedIcon
            sx={{
              fontSize: "22px",
              color: "#fff",
              marginRight: "7px",
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
                    fontSize: "30px",
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

export default Navbar;
