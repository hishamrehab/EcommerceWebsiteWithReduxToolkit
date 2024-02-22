import React from "react";
import  OurServicesComponet from "./OurServicesComponet";
import "./OurServises.scss";
const OurServises = () => {
  return (
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
  );
};

export default OurServises;
