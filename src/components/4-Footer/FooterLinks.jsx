import React from "react";
import "./FooterLinks";
import { Spa } from "@mui/icons-material";
const FooterLinks = ({
  itemTitle,
  item1,
  item2,
  item3,
  item4,
  item5,
  icon1,
  icon2,
  icon3,
  item8,
  item9,
  item10,
}) => {
  return (
    <div className="item">
      <p className="item-title">
        {itemTitle}
        <span className="border-title"></span>
      </p>
      <p className="item-links">{item1}</p>
      <p className="item-links">{item2}</p>
      <p className="item-links">{item3}</p>
      <p className="item-links">{item4}</p>
      <p className="item-links">{item5}</p>

      <p className="item-links">
        <span className="icon">{icon1}</span>
        <span>{item8}</span>
      </p>

      <p className="item-links">
        <span className="icon">{icon2}</span>
        <span>{item9}</span>
      </p>
      <p className="item-links">
        <span className="icon">{icon3}</span>
        <span>{item10}</span>
      </p>
    </div>
  );
};

export default FooterLinks;