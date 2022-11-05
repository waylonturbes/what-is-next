import { configureStore } from "@reduxjs/toolkit";
import selectedDateSliceReducer from "./slices/selectedDateSlice";

const store = configureStore({
  reducer: {
    selectedDate: selectedDateSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
