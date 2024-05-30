import React from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

//components
import Icon from "../components/Icon";
import IconButtonMenu from "../components/IconButtonMenu";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { toggle as sidebarToggle, width as sidebarWidth, open as sidebarOpen } from "../store/SidebarSlice";
import { userInfo, logout } from "../store/UserSlice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, width }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: width,
    width: `calc(100% - ${width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //sidebar
  const drawerWidth = useSelector(sidebarWidth);
  const drawerOpen = useSelector(sidebarOpen);

  //user
  const activeUserInfo = useSelector(userInfo);

  return (
    <AppBar position="fixed" open={drawerOpen} width={drawerWidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(sidebarToggle())}
          edge="start"
          sx={{
            marginRight: 5,
            ...(drawerOpen && { display: "none" }),
          }}
        >
          <Icon iconName={"Menu"} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <IconButtonMenu
            iconButtonProps={{
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "account",
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
