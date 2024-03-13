import React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import Nav from "react-bootstrap/Nav";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { useSelector } from "react-redux";

import logo from "../../../images/logo.svg";

import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";

import { Badge } from "@mui/material";

const SecondNavbar = () => {
  const products = useSelector((state) => state.cart.products);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Container>
      <div
        style={{
          borderBottom: "1px solid #d3d3d3",
        }}
      >
        <div
          className="navbar-icons"
          style={{
            paddingBottom: "5px",
          }}
        >
          <div className="navbar-icons1">
            <span>
              <FacebookIcon
                style={{
                  fontSize: "30px",
                }}
              />
            </span>
            <span>
              <InstagramIcon
                style={{
                  fontSize: "30px",
                }}
              />
            </span>
            <span>
              <LinkedInIcon
                style={{
                  fontSize: "30px",
                }}
              />
            </span>
            <span>
              <GitHubIcon
                style={{
                  fontSize: "30px",
                }}
              />
            </span>
          </div>
          <div className="navbar-icons2">
            <IconButton aria-label="cart">
              <Link to="cart">
                <StyledBadge
                  badgeContent={products.length > 0 ? products.length : "0"}
                  color="primary"
                >
                  <ShoppingBagIcon
                    sx={{
                      fontSize: "40px",
                      color: "#777",
                    }}
                  />
                </StyledBadge>
              </Link>
            </IconButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SecondNavbar;
