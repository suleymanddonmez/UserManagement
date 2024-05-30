import React from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// metarial-icons
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//react-redux
import { useDispatch, useSelector } from "react-redux";
import { toggle as sidebarToggle, width as sidebarWidth, open as sidebarOpen } from "../store/SidebarSlice";
import { setActive as setActiveMenuItem, items as menuItems, activeItem as activeMenuItem } from "../store/MenuSlice";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";

const openedMixin = (theme, width) => ({
  width: width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open, width }) => ({
  width: width,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, width),
    "& .MuiDrawer-paper": openedMixin(theme, width),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //sidebar
  const drawerWidth = useSelector(sidebarWidth);
  const drawerOpen = useSelector(sidebarOpen);

  //menu
  const menuList = useSelector(menuItems);
  const selectedMenuItem = useSelector(activeMenuItem);

  const onClick = (item) => {
    dispatch(setActiveMenuItem(item.id));
    navigate(item.link);
  };

  return (
    <Drawer variant="permanent" open={drawerOpen} width={drawerWidth}>
      <DrawerHeader>
        <IconButton onClick={() => dispatch(sidebarToggle())}><Icon iconName={theme.direction === "rtl" ? "ChevronRight" : "ChevronLeft"} /></IconButton>
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
                  selected={selectedMenuItem == item.id}
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
                  <ListItemText primary={item.text} sx={{ opacity: drawerOpen ? 1 : 0 }} />
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
