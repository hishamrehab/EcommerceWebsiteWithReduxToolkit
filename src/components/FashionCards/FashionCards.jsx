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
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexDirection: "row",
        }}
      >
        <div>
          <FashionCard
            img={blog1}
            title="Fashion"
            desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
            admin="By Mr Admin / Apr 06, 2024"
          />
        </div>
        <div>
          <FashionCard
            img={blog2}
            title="Clothes"
            desc="Curbside fashion Trends: How to Win the Pickup Battle."
            admin="By Mr Robin / Jan 18, 2024"
          />
        </div>

        <div>
          <FashionCard
            img={blog3}
            title="Shoes"
            desc="Clothes Retail KPIs 2021 Guide for Clothes Executives"
            admin="By Mr Admin / Apr 06, 2024"
          />
        </div>

        <div>
          <FashionCard
            img={blog4}
            title="Electronics"
            desc="EBT vendors: Claim Your Share of SNAP Online Revenue."
            admin="By Mr Selsa / Feb 10, 2022"
          />
        </div>
      </div>
    </Container>
  );
};

export default FashionCards;
