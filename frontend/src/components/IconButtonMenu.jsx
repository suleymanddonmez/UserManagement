import React, { useState } from "react";
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import Functions from "../utils/Functions";
import Icon from "./Icon";

function IconButtonMenu({ iconName, iconButtonProps, items }) {
  const [opened, setOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonId, setButtonId] = useState(Functions.uuid.new());
  const [menuId, setMenuId] = useState(Functions.uuid.new());

  return (
    <>
      <IconButton
        aria-label="more"
        id={buttonId}
        aria-controls={opened ? menuId : undefined}
        aria-expanded={opened ? "true" : undefined}
        aria-haspopup="true"
        onClick={(e) => {
          if (!opened) {
            setAnchorEl(e.currentTarget);
          } else {
            setAnchorEl(null);
          }
          setOpened(!opened);
        }}
        {...iconButtonProps}
      >
        <Icon iconName={iconName} />
      </IconButton>
      <Menu
        id={menuId}
        MenuListProps={{
          "aria-labelledby": buttonId,
        }}
        anchorEl={anchorEl}
        open={opened}
        onClose={() => {
          setAnchorEl(null);
          setOpened(false);
        }}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={`${menuId}_${item.id}_${index}`}
              onClick={() => {
                setAnchorEl(null);
                setOpened(false);
                item.onClick();
              }}
            >
              <ListItemIcon>
                <Icon iconName={item.iconName} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default IconButtonMenu;
