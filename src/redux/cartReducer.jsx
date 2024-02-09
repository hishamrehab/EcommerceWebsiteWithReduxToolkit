import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id == action.payload.id
      );

      !product && state.products.push(action.payload);
    },

    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearAllFromCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
