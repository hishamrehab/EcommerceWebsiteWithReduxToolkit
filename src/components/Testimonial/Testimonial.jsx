import React from "react";
import FounderDefinition from "./FounderDefinition";
import Discount from "./Discount";
import OurServises from "./OurServises";
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
        }}
      >
        <div>
          <FounderDefinition />
        </div>
        <div>
          <Discount />
        </div>
        <div>
          <OurServises />
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
