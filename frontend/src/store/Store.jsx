import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import menuReducer from "./MenuSlice";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
