import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: true,
    userInfo: {
      userId: 1,
      userName: "Süleyman Dönmez",
      userPhoto: "",
      userRoles: [],
      token: null,
    },
  },
  reducers: {
    login: (state, action) => {
      if (action.payload.email == "admin" && action.payload.password == "1") {
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      } else {
        userSlice.actions.logout();
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state = userSlice.getInitialState();
    },
  },
});

export const { login, logout } = userSlice.actions;

export const isLoggedIn = (state) => state.user.isLoggedIn;
export const userInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
