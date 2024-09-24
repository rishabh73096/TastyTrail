import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx"; 
import CategerySlice from "./slices/CategorySlice.jsx"; 

const Store = configureStore({
  reducer: {
    Cart: CartSlice, 
    categery: CategerySlice, 
  },
});

export default Store;
