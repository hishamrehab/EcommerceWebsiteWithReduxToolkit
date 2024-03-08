import React from "react";
import SailingIcon from "@mui/icons-material/Sailing";
import "./OurServisesComponet.scss";
import { Container } from "react-bootstrap";
const OurServicesComponet = () => {
  return (
    <Container>
      <div className="our-services" >
        <div className="our-services-icon">
          <SailingIcon
            style={{
              fontSize: "35px",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <h3 className="our-services-title">Worldwide Delivery</h3>
          <h4 className="our-services-price">For Order Over $100</h4>
        </div>
      </div>
    </Container>
  );
};

export default OurServicesComponet;
