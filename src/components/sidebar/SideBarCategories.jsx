import * as React from "react";

import "./SideBar.scss";

import { sidebarCategories } from "../../data";
import DropdownMenu from "./DropdownMenu";
import { Container } from "@mui/material";


const SideBarCategories = () => {
  return (
    <Container>
      <div className="sidebar has-scrollbar">
        <div className="sidebar-category">
          <div className="sidebar-top">
            <h5 className="sidebar-title">Category</h5>
          </div>

          <div>
            {sidebarCategories.map((category) => {
              return (
                <div key={category.id}>
                  <DropdownMenu category={category} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SideBarCategories;
