import React from "react";
import FashionCard from "./FashionCard";
import { Container } from "react-bootstrap";
import blog1 from "../../../images/products/blog-1 (1).jpg";
import blog2 from "../../../images/products/blog-2 (1).jpg";
import blog3 from "../../../images/products/blog-3 (2).jpg";
import blog4 from "../../../images//products/blog-4 (1).jpg";
const FashionCards = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <FashionCard
          img={blog1}
          title="Fashion"
          desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          admin="By Mr Admin / Apr 06, 2022"
        />

        <FashionCard
          img={blog2}
          title="Fashion"
          desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          admin="By Mr Admin / Apr 06, 2022"
        />

        <FashionCard
          img={blog3}
          title="Fashion"
          desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          admin="By Mr Admin / Apr 06, 2022"
        />
        <FashionCard
          img={blog4}
          title="Fashion"
          desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          admin="By Mr Admin / Apr 06, 2022"
        />
      </div>
    </Container>
  );
};

export default FashionCards;
