import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICart } from "../model/ICart";

interface TaskState {
  tasks: ICart[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: "1",
      text: "Wake up at 5 in the morning!",
      check: false,
    },
    {
      id: "2",
      text: "Go to gym.",
      check: false,
    },
    {
      id: "3",
      text: "Leave for Office.",
      check: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todoReducer;
export default todoSlice.reducer;
