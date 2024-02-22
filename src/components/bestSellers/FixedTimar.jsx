import React from "react";

const fixedTimar = ({ time, name }) => {
  return (
    <div
      style={{
        backgroundColor: " hsl(0, 0%, 60%)",
        width: "60px",
        borderRadius: "10px",
        marginLeft: "30px",
      }}
    >
      <p>{time}</p>
      <p>{name}</p>
    </div>
  );
};

export default fixedTimar;
