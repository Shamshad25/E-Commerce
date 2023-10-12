import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "../model/ICart";
import { data } from "../../data";

interface TaskState {
  cart: [];
  products: IProduct[];
}

const initialState: TaskState = {
  cart: [],
  products: data,
};

export const cartSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;
