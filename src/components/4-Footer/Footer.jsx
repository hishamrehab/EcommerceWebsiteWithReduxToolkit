import React from "react";
import "./Footer.css";
import { Container } from "@mui/material";
import payment from "../../../images/products/payment.png";
import FooterLinks from "./FooterLinks";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <div className="brand-directory">
          <h6 className="brand-title">BRAND DIRECTORY</h6>
          <div className="fashion">
            <span className="fristword">FASHION :</span> T-Shirt: Shirts |
            Shorts & Jeans | Jacket | Dress & Frock | InnerWear | Hosiery
          </div>
          <div className="fashion">
            <span className="fristword">FOOTWEAR : </span> Formal | Boots |
            Casual | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded |
            Firstcopy | Long Shoes
          </div>
          <div className="fashion">
            <span className="fristword">JEWELLERY : </span> Necklace | Earrings
            | Couple Rings | Pendants | Crystal | Bangles | Bracelets | Nosepin
            | Chain | Earrings | Couple Rings{" "}
          </div>
          <div className="fashion">
            <span className="fristword">COSMETICS : </span> Shampoo | Bodywash |
            Facewash | Makeup Kit | Liner | Lipstick | Prefume | Body Soap |
            Scrub | Hair Gel | Hair Colors | Hair Dye | Sunscreen | Skin Loson |
            Liner | Lipstick
          </div>
        </div>
        <hr
          style={{
            color: "#777",
          }}
        />

        <div className="Footer-second-section">
          <div className="top">
            <div>
              <FooterLinks
                itemTitle={"POPULAR CATEGORIES"}
                item1={"Fashion"}
                item2={"Electronic"}
                item3={"Cosmetic"}
                item4={"Health"}
                item5={"Watches"}
              />
            </div>

            <div>
              <FooterLinks
                itemTitle={"PRODUCTS"}
                item1={"Prices Drop"}
                item2={"New Products"}
                item3={"Best Sales"}
                item4={"Contact Us"}
                item5={"Sitemap"}
              />
            </div>

            <div>
              <FooterLinks
                itemTitle={"OUR COMPANY"}
                item1={"Delivery"}
                item2={"Legal Notice"}
                item3={"Terms And Conditions"}
                item4={"About Us"}
                item5={"Secure Payment"}
              />
            </div>

            <div>
              <FooterLinks
                itemTitle={"SERVICES"}
                item1={"Prices Drop"}
                item2={"New Products"}
                item3={"Best Sales"}
                item4={"Contact Us"}
                item5={"Sitemap"}
              />
            </div>

            <div>
              <FooterLinks
                itemTitle={"CONTACT"}
                item8={
                  "419 State 414 Rte Beaver Dams, New York(NY), 14812, USA"
                }
                icon1={<PlaceIcon />}
                item9={"(607) 936-8058New Products"}
                icon2={<CallIcon />}
                item10={"Example@Gmail.Com"}
                icon3={<MarkunreadIcon />}
              />
            </div>
          </div>

          <div className="bottom">
            <div className="right">
              <img src={payment} className="footer-img" />
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
