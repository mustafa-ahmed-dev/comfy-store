import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;

      toast.success("Logged in successfully", {
        draggable: true,
      });
    },
    logout: (state) => {
      state.user = null;

      localStorage.removeItem("user");

      toast.success("Logged out successfully", {
        draggable: true,
      });
    },
  },
});

export const { login, logout, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
