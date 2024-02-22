import React from "react";
import "./Footer.css";
import { Container } from "@mui/material";
import payment from "../../../images/products/payment.png";
const Footer = () => {
  return (
    <div>
      <Container>
        <div className="brand-directory">
          <h6 className="brand-title">BRAND DIRECTORY</h6>
          <div className="fashion">
            T-Shirt: Shirts | Shorts & Jeans | Jacket | Dress & Frock |
            InnerWear | Hosiery
          </div>
          <div>
            Sport : Formal | Boots | Casual | Cowboy Shoes | Safety Shoes |
            Party Wear Shoes | Branded | Firstcopy | Long Shoes
          </div>
          <div>
            JEWELLERY : Necklace | Earrings | Couple Rings | Pendants | Crystal
            | Bangles | Bracelets | Nosepin | Chain | Earrings | Couple Rings{" "}
          </div>
          <div>
            COSMETICS : Shampoo | Bodywash | Facewash | Makeup Kit | Liner |
            Lipstick | Prefume | Body Soap | Scrub | Hair Gel | Hair Colors |
            Hair Dye | Sunscreen | Skin Loson | Liner | Lipstick
          </div>
        </div>
        <div className="Footer">
          <div className="top">
            <div className="item">
              <h1>POPULAR CATEGORIES</h1>
              <span>Prices Drop</span>
              <span>New Products</span>
              <span>Best Sales</span>
              <span>Contact Us</span>
              <span>Watches</span>
            </div>
            <div className="item">
              <h1>PRODUCTS</h1>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Store</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>

            <div className="item">
              <h1>OurCOMPANY</h1>
              <span>Delivery</span>
              <span>Legal Notice</span>
              <span>Terms And Conditions</span>
              <span>About Us</span>
              <span>Secure Payment</span>
            </div>

            <div className="item">
              <h1>SERVICES</h1>
              <span>Prices Drop</span>
              <span>New Products</span>
              <span>Best Sales</span>
              <span>Contact Us</span>
              <span>Sitemap</span>
            </div>

            <div className="item">
              <h1>Contact</h1>
              <span>
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </span>
              <span> 01211463479</span>
              <span>hishamrehab309@gmail.com</span>
            </div>
            <div className="item">
              <h1>Follow Us</h1>
              <span></span>
              <span> </span>
              <span></span>
            </div>

            <div className="item">
              <h1>About</h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, a debitis. At voluptatibus corporis ea ratione rem
                minima suscipit error doloremque placeat. Eveniet tempore
                facilis voluptatem cupiditate, deleniti debitis magni!
              </span>
            </div>
            <div className="item">
              <h1>Contact</h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, a debitis. At voluptatibus corporis ea ratione rem
                minima suscipit error doloremque placeat. Eveniet tempore
                facilis voluptatem cupiditate, deleniti debitis magni!
              </span>
            </div>
          </div>

          <div className="bottom">
            <div className="right">
              <img
                src={payment}
                style={{
                  width: "300px",
                  height: "30px",
                  margin: "auto",
                }}
              />
            </div>
            <div className="left">
              <span className="copyright">
                © Copy right 2024 , All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
