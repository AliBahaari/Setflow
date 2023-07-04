import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  themeColor: "light" | "dark";
}

const initialState: IInitialState = {
  themeColor: "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleThemeColor: (state) => {
      state.themeColor = state.themeColor === "light" ? "dark" : "light";
    },
  },
});

export const { toggleThemeColor } = globalSlice.actions;
export default globalSlice.reducer;
