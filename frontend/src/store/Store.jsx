import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import userReducer from "./UserSlice";
import menuReducer from "./MenuSlice";
import sidebarReducer from "./SidebarSlice";
import modalReducer from "./ModalSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    menu: menuReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
  },
});

export default store;
