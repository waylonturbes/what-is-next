import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Task = {
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  isCompleted: boolean;
};

interface SelectedDateState {
  /** Date of the selected date */
  date: Date | null;
  /** Active holidays for to the selected date */
  holidays: string[] | null;
  /** Tasks scheduled for the selected date */
  tasks: Task[] | null;
}

const initialState: SelectedDateState = {
  date: null,
  holidays: null,
  tasks: null,
};

const selectedDateSlice = createSlice({
  name: "selectedDate",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<SelectedDateState>) => {
      state = action.payload;
    },
  },
});

export const { setSelectedDate } = selectedDateSlice.actions;

export default selectedDateSlice.reducer;
