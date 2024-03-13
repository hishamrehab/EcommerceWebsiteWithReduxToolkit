import React from "react";
import { Container } from "react-bootstrap";

const fixedTimar = ({ time, name }) => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: "hsl(0, 0%, 60%)",
          width: "35px",
          borderRadius: "5px",
          marginLeft: {
            xs: "25px",
            sm: "25px",
          },
          padding: "8px",
          marginBottom: "15px",
          paddingBottom: "20px",
          height: "50px",
          // marginRight: "20px",
        }}
      >
        <p>{time}</p>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          {name}
        </p>
      </div>
    </Container>
  );
};

export default fixedTimar;
