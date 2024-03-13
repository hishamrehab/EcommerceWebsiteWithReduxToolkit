import React from "react";
import OurServicesComponet from "./OurServicesComponet";
import "./OurServises.scss";
import { Container } from "react-bootstrap";
const OurServises = () => {
  return (
    <Container>
      <div className="our-services-main">
        <h2 className="our-services-mainTitle">Our Services</h2>
        <div className="our-Services-container">
          <div>
            <OurServicesComponet />
          </div>
          <div>
            <OurServicesComponet />
          </div>

          <div>
            <OurServicesComponet />
          </div>

          <div>
            <OurServicesComponet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurServises;
