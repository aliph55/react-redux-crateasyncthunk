import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import cartItem from "../../CartItem";
import axios from "axios";

const initialState = {
  cartItems: cartItem,
  amount: 1,
  total: 0,
  isLoading: false,
  error: "",
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItem = createAsyncThunk(
  "cart/getCartItem",
  async (name, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const resp = await axios.get(url);

      const data = await resp.data;
      return data;
    } catch (error) {
      console.log(error);
    }

    // return await fetch(url)
    //   .then((response) => response.json())
    //   .catch((err) => console.log(err));
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const tempItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartItems: tempItem };
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      total = total.toFixed(2);

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItem.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartItem.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
