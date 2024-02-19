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

const SecondNavbar = () => {
  return (
    <Container>
      <div className="navbar-icons">
        <div className="navbar-icons1">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
          <span>
            <GitHubIcon />
          </span>
        </div>
        <div className="navbar-icons2">
          <span>
            <Person3OutlinedIcon
              style={{
                fontSize: "35px",
              }}
            />
          </span>
          <span>
            <FavoriteIcon
              style={{
                fontSize: "35px",
              }}
            />
          </span>
          <span>
            <ShoppingBagIcon
              style={{
                fontSize: "35px",
              }}
            />
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SecondNavbar;
