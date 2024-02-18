import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DropDownMeun from "./DropDownMeun";
import { Container } from "react-bootstrap";
import "./Navbar.css";
const FirstNavbar = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "40px",
        borderBottom: "1px solid #CCD3CA",

        marginTop: "10px",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="header-icons">
            <span className="header-icon">
              <FacebookIcon />
            </span>

            <span className="header-icon">
              <InstagramIcon />
            </span>
            <span className="header-icon">
              <LinkedInIcon />
            </span>
            <span className="header-icon">
              <GitHubIcon />
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: "13px",
              }}
            >
              FREE SHIPPING THIS WEEK ORDER OVER - $55
            </p>
          </div>
          <div>
            <DropDownMeun />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FirstNavbar;
