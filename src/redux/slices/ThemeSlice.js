import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name:'theme',
  initialState: { mode: "light", color: "red" },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setMode, setColor } = themeSlice.actions;
export default themeSlice.reducer;
