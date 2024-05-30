import { createSlice } from "@reduxjs/toolkit";
import MenuList from "../utils/Menu";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    active: "home",
    items: MenuList,
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;

export const items = (state) => state.menu.items;
export const activeItem = (state) => state.menu.active;

export default menuSlice.reducer;
