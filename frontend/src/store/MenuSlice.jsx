import { createSlice } from "@reduxjs/toolkit";
import MenuList from "../utils/Menu";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeId: "home",
    items: MenuList,
  },
  reducers: {
    setActive: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;

export const items = (state) => state.menu.items;
export const activeItem = (state) => state.menu.items.find((i) => i.id == state.menu.activeId);

export default menuSlice.reducer;
