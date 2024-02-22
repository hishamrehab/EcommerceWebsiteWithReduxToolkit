import React from "react";
import SailingIcon from "@mui/icons-material/Sailing";
import "./OurServisesComponet.scss";
const OurServicesComponet = () => {
  return (
    <div className="our-services">
      <div className="our-services-icon">
        <SailingIcon
          style={{
            fontSize: "35px",
            cursor:"pointer",
          }}
        />
      </div>
      <div>
        <h3 className="our-services-title">Worldwide Delivery</h3>
        <h4 className="our-services-price">For Order Over $100</h4>
      </div>
    </div>
  );
};

export default OurServicesComponet;
