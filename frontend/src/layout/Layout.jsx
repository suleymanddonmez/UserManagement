import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

//layout
import Header from "./Header";
import Sidebar, { DrawerHeader } from "./Sidebar";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, logout } from "../store/UserSlice";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
