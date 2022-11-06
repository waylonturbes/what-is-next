import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  /** Active color scheme of the application */
  colorScheme: "light" | "dark";
}

const initialState: ThemeState = {
  colorScheme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeColorScheme: (
      state,
      action: PayloadAction<ThemeState["colorScheme"]>
    ) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setThemeColorScheme } = themeSlice.actions;

export default themeSlice.reducer;
