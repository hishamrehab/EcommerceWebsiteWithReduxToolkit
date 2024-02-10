import React from "react";
import "./Footer.css";
import { Container } from "@mui/material";
const Footer = () => {
  return (
    <Container>
      <div className="Footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Store</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              a debitis. At voluptatibus corporis ea ratione rem minima suscipit
              error doloremque placeat. Eveniet tempore facilis voluptatem
              cupiditate, deleniti debitis magni!
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              a debitis. At voluptatibus corporis ea ratione rem minima suscipit
              error doloremque placeat. Eveniet tempore facilis voluptatem
              cupiditate, deleniti debitis magni!
            </span>
          </div>
        </div>


        <div className="bottom">
          <div className="left">
            <span className="logo">HishamRehabStore</span>
            <span className="copyright">
              © Copy right 2023 , All Rights Reserved
            </span>
          </div>


          <div className="right">
            <img
              src="https://content.asos-media.com/-/media/customer-care/images/imported/us/uspaymentmethodsklarna.ash?la=en-us&h=418&w=1385&hash=A8DC189DE960960509E521CB0405352C"
              style={{
                width: "300px",
                height: "100px",
              }}
            />
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Footer;
