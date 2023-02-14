import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state;
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
        return state;
      }
    },

    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    removeFromCart(state, { payload }) {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addToCart, increament, decrement, removeFromCart } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
