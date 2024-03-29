import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./FounderDefinition.scss";
import founderImg from "../../../images/products/testimonial-1.jpg";
import { Container } from "react-bootstrap";
const FounderDefinition = () => {
  return (
    <Container>
      <div className="founder">
        <div className="founder-title">
          <p>Testimonial</p>
        </div>
        <div className="founder-definition">
          <img
            src={founderImg}
            className="founder-image"
            style={{
              margin: "auto",
            }}
          />
          <h3 className="founder-name">ALAN DOE</h3>
          <h3 className="founder-jop">CEO & Founder Invision</h3>
          <h4 className="founder-icon">
            <FormatQuoteIcon
              style={{
                fontSize: "60px",
                marginLeft: "20px",
              }}
            />
          </h4>
          <p className="founder-desc">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FounderDefinition;
