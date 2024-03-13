import React from "react";
import FounderDefinition from "../../components/FounderCard/FounderDefinition";
import Discount from "../../components/DiscountCard/Discount";
import OurServises from "../../components/Services/OurServises";
import { Container } from "react-bootstrap";

const Testimonial = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: "row",
          marginBottom: "60px",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <div className="founder-part">
          <FounderDefinition />
        </div>
        <div className="discount-part">
          <Discount />
        </div>
        <div className="services-part">
          <OurServises />
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
