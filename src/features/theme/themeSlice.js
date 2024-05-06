import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { themes } from "../../constants";

import { getTheme, setTheme } from "../../utils";

const initialState = {
  theme: getTheme() || themes[0].name,
};

const themeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;

      setTheme(state.theme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
