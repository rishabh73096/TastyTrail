import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exitedItem = state.Cart.find(
        (item) => item.id === action.payload.id
      );
      if (exitedItem) {
        state.Cart = state.Cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.Cart.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
    },
    increment :(state,action) =>{
        state.Cart=state.Cart.map((item)=> item.id ===action.payload.id ? {...item, qty: item.qty+1 }:item)
    },
    decrement :(state,action)=>{
        state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item,qty:item.qty-1}:item)
    },
    totalPrice :(state,action)=>{
        state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item,price:item.qty*item.price}:item)
    }
  },
});

export const { addToCart, removeToCart ,increment, decrement ,totalPrice} = CartSlice.actions;
export default CartSlice.reducer;
