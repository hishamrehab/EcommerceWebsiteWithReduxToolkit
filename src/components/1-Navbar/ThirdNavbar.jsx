import React from "react";
import logo from "../../../images/logo.svg";

import { styled, alpha } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { Link } from "react-router-dom";

import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ThirdNavbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={logo}
              alt="logo"
              width={"100px"}
              height={"25px"}
              style={{
                marginRight: "15px",
              }}
            />
          </div>
          <div>
            <Search
              style={{
                backgroundColor: "red",
                border: "1px solid %777",
                borderRadius: "10px",
                width: "700px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Enter Your Product Name"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>

          <div
            style={{
              color: "#777",
              cursor: "pointer",
            }}
          >
            <PersonIcon
              sx={{
                fontSize: "35px",
                marginRight: "20px",
              }}
            />

            <IconButton
              sx={{
                marginRight: "10px",
              }}
            >
              <StyledBadge badgeContent={"0"} color="secondary">
                <FavoriteIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </StyledBadge>
            </IconButton>

            <IconButton aria-label="cart">
              <Link to="cart">
                <StyledBadge
                  badgeContent={products.length > 0 ? products.length : "0"}
                  color="secondary"
                >
                  <ShoppingBagIcon
                    sx={{
                      fontSize: "35px",
                      color: "#777",
                    }}
                  />
                </StyledBadge>
              </Link>
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThirdNavbar;
