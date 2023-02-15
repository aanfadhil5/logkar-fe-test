import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  list: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    getProductsFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(getProducts());
  axios
    .get("https://swapi.dev/api/films/")
    .then((response) => {
      dispatch(getProductsSuccess(response.data.results));
    })
    .catch((err) => {
      dispatch(getProductsFailure(err));
    });
};

const productsReducer = productSlice.reducer;

export default productsReducer;
