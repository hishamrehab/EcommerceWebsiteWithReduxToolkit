import * as React from "react";
import Box from "@mui/material/Box";
import "./SideBar.scss";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";


import SideBarCategories from "./SideBarCategories";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
const SideBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: "250px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SideBarCategories />
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <React.Fragment key={"left"}>
          <KeyboardTabIcon
            onClick={toggleDrawer("left", true)}
            style={{
              cursor: "pointer",
              marginLeft: "80px",
              fontSize: "30px",
            }}
          >
            {"left"}
          </KeyboardTabIcon>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </React.Fragment>
      
    </div>
  );
};

export default SideBar;
