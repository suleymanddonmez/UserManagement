import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// material-ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//react-redux
import { useDispatch, useSelector } from "react-redux";
import { toggle as sidebarToggle, open as sidebarOpen } from "../store/SidebarSlice";
import { setActive as setActiveMenuItem, items as menuItems, activeItem as activeMenuItem } from "../store/MenuSlice";

//components
import Icon from "../components/Icon";

//assets
import Logo from "../assets/img/logo.png";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerAppBar = styled(({ logoSrc, appTitle, appSubTitle, onClick, drawerOpen, ...otherProps }) => (
  <Box {...otherProps} onClick={onClick}>
    <img src={logoSrc} title={appTitle} />
    <ListItemText primary={appTitle} secondary={appSubTitle} />
  </Box>
))(({ theme, drawerOpen }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  img: {
    width: "2.5rem",
    [theme.breakpoints.down("md")]: {
      width: "2rem",
    },
    transition: theme.transitions.create(["width", "padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  ".MuiListItemText-root": {
    display: !drawerOpen && "none",
    marginLeft: "15px",
    lineHeight: "normal",
    span: {
      fontSize: "25px",
      fontWeight: "600",
      lineHeight: "inherit",
    },
    p: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "inherit",
    },
  },
}));

const DrawerCloseIcon = styled((props) => (
  <IconButton {...props}>
    <Icon iconName={"Menu"} />
  </IconButton>
))(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "absolute",
  left: "12px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //sidebar
  const drawerOpen = useSelector(sidebarOpen);

  //menu
  const menuList = useSelector(menuItems);
  const selectedMenuItem = useSelector(activeMenuItem);

  useEffect(() => {
    let path = location.pathname;
    if (path != selectedMenuItem.link) {
      let newSelectedMenuItem = menuList.find((i) => i.link == path);
      if (newSelectedMenuItem) {
        dispatch(setActiveMenuItem(newSelectedMenuItem.id));
      }
    }
  }, [location]);

  const onClick = (item) => {
    dispatch(setActiveMenuItem(item.id));
    navigate(item.link);
  };

  return (
    <Drawer
      variant="permanent"
      open={drawerOpen}
      PaperProps={{
        open: drawerOpen,
      }}
    >
      <DrawerHeader>
        <DrawerCloseIcon onClick={() => dispatch(sidebarToggle())} />
        <DrawerAppBar
          logoSrc={Logo}
          appTitle={"sdtech"}
          appSubTitle={"Kullanıcı Yönetim Uygulaması"}
          onClick={() => navigate("/")}
          drawerOpen={drawerOpen}
        />
      </DrawerHeader>
      <Divider />
      <List>
        {menuList.map((item, index) => {
          if (item == "divider") {
            return <Divider key={`app_menu_divider_${index}`} />;
          } else {
            return (
              <ListItem key={`app_menu_${item.id}_${index}`} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={selectedMenuItem.id == item.id}
                  onClick={() => onClick(item)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerOpen ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Icon iconName={item.iconName} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    secondary={item.subText}
                    sx={{
                      opacity: drawerOpen ? 1 : 0,
                      ".MuiListItemText-primary": { lineHeight: "normal" },
                      ".MuiListItemText-secondary": { fontSize: "0.7rem", lineHeight: "normal" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar;
