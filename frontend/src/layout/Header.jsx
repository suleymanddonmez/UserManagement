import React from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//components
import Icon from "../components/Icon";
import IconButtonMenu from "../components/IconButtonMenu";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { toggle as sidebarToggle, open as sidebarOpen } from "../store/SidebarSlice";
import { userInfo, logout } from "../store/UserSlice";
import { activeItem as activeMenuItem } from "../store/MenuSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //sidebar
  const drawerOpen = useSelector(sidebarOpen);

  //menu
  const selectedMenuItem = useSelector(activeMenuItem);

  //user
  const activeUserInfo = useSelector(userInfo);

  return (
    <AppBar position="fixed" open={drawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(sidebarToggle())}
          edge="start"
          sx={{
            marginRight: 1,
          }}
        >
          <Icon iconName={"Menu"} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h2" sx={{ fontSize: "1rem" }}>
            {selectedMenuItem.text}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButtonMenu
            iconButtonProps={{
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "account",
              sx: { marginLeft: 1 },
            }}
            iconName={"AccountCircle"}
            items={[
              {
                id: "profile",
                text: "Profil",
                iconName: "Person",
                onClick: () => console.log("SD go to profile"),
              },
              {
                id: "account-info",
                text: "Hesap Bilgileri",
                iconName: "ManageAccounts",
                onClick: () => console.log("SD go to account info"),
              },
              {
                id: "logout",
                text: "Güvenli Çıkış",
                iconName: "Logout",
                onClick: () => dispatch(logout()),
              },
            ]}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
