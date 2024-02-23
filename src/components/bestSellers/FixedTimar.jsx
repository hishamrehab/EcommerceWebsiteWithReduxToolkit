import React from "react";

const fixedTimar = ({ time, name }) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 60%)",
        width: "50px",
        borderRadius: "5px",
        marginLeft: {
           xs: "25px",
          sm: "25px",
  
         
        },
    
        padding: "5px",
        marginBottom: "15px",
        paddingBottom: "20px",
        height: "50px",
      }}
    >
      <p>{time}</p>
      <p>{name}</p>
    </div>
  );
};

export default fixedTimar;
