import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./SideBar.scss";

import { Box, Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container } from "react-bootstrap";

const DropdownMenu = ({ category }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <div>
        <List component="nav">
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <img src={category.image} width={"25px"} />
                <Typography
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  {category.mainTitle}
                </Typography>
              </Box>
              {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
          </ListItemButton>
        </List>

        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
          sx={{
            maxWidth: "250px",
            boxShadow: "none",
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{category.item1}</Typography>
            <Typography
              sx={{
                paddingRight: "15px",
                marginRight: "10px",
              }}
            >
              {category.price1}
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{category.item2}</Typography>
            <Typography
              sx={{
                paddingRight: "15px",
                marginRight: "10px",
              }}
            >
              {category.price2}
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{category.item3}</Typography>
            <Typography
              sx={{
                paddingRight: "15px",
                marginRight: "10px",
              }}
            >
              {category.price3}
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{category.item4}</Typography>
            <Typography
              sx={{
                paddingRight: "15px",
                marginRight: "10px",
              }}
            >
              {category.price4}
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
};

export default DropdownMenu;
