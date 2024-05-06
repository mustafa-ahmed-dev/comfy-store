import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getFromLocalStorage, setToLocalStorage } from "./../../utils";

const findItem = (items, cartItemId) => {
  const item = items.find((cartItem) => cartItem.cartItemId === cartItemId);

  return item;
};

const calculateTotals = (state, tax = 0.1) => {
  state.tax = tax * state.cartTotal;
  state.orderTotal = state.cartTotal + state.shipping + state.tax;
};

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const defaultState = getFromLocalStorage("cart") || initialState;

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = findItem(state.cartItems, product.cartItemId);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      calculateTotals(state);
      setToLocalStorage("cart", state);

      toast.success("Item added successfully", {
        draggable: true,
      });
    },
    removeItem: (state, action) => {
      const { cartItemId } = action.payload;

      const product = findItem(state.cartItems, cartItemId);

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.cartItemId !== cartItemId
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;

      calculateTotals(state);
      setToLocalStorage("cart", state);

      toast.success("Item removed successfully", {
        draggable: true,
      });
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");

      toast.success("Cart cleared successfully", {
        draggable: true,
      });

      return initialState;
    },
    editItem: (state, action) => {
      const { cartItemId, amount } = action.payload;

      const item = findItem(state.cartItems, cartItemId);

      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;

      calculateTotals(state);
      setToLocalStorage("cart", state);

      toast.success("Cart updated", {
        draggable: true,
      });
    },
  },
});

export const { addItem, clearCart, editItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
