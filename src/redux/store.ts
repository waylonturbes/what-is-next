import { configureStore } from "@reduxjs/toolkit";
import selectedDateSliceReducer from "./slices/selectedDateSlice";
import themeSliceReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    selectedDate: selectedDateSliceReducer,
    theme: themeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
