import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { episode_id } = payload;

      const find = state.find((item) => item.episode_id === episode_id);

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
        item.episode_id === payload.episode_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.episode_id === payload.episode_id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    removeFromCart(state, { payload }) {
      return state.filter((item) => item.episode_id !== payload);
    },
    order(state, { payload }) {
      return initialState;
    },
  },
});

export const { addToCart, increament, decrement, removeFromCart, order } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
