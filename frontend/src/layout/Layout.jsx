import React, { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// material-ui
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

//layout
import Header from "./Header";
import Sidebar, { DrawerHeader } from "./Sidebar";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, logout } from "../store/UserSlice";
import { setMode, mode } from "../store/ThemeSlice";
import { open as sidebarOpen } from "../store/SidebarSlice";

//themes
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

export const Main = styled(Box, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexGrow: 1,
  p: 3,
  [theme.breakpoints.down("sm")]: {
    display: open && "none",
  },
}));

export const ThemeSelector = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: 1,
  right: 0,
  bottom: 0,
  padding: theme.spacing(0, 1),
}));

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeMode = useSelector(mode);
  const theme = useMemo(() => createTheme(themeMode === "light" ? lightTheme : darkTheme), [themeMode]);

  const drawerOpen = useSelector(sidebarOpen);
  const isAuth = useSelector(isLoggedIn);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, dispatch, navigate]);

  if (!isAuth) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />
        <Main component="main" sx={{ flexGrow: 1, p: 3 }} open={drawerOpen}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
      <ThemeSelector>
        <Switch value={themeMode == "light"} onChange={(e) => dispatch(setMode(themeMode == "dark" ? "light" : "dark"))} />
      </ThemeSelector>
    </ThemeProvider>
  );
}

export default Layout;
