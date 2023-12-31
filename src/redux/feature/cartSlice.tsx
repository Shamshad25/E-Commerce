import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "../model/ICart";
import { data } from "../../data";

interface TaskState {
  cart: IProduct[];
  products: IProduct[];
}

const initialState: TaskState = {
  cart: [],
  products: data,
};

export const cartSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const data = state.cart.filter((el) => el.id !== action.payload);
      console.log("PAYLOAD ", action.payload);
      state.cart = data;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;
