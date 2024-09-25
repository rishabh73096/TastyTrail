import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx"; 
import CategerySlice from "./slices/CategorySlice.jsx"; 
import SearchSlice from "./slices/SearchSlice.jsx";
const Store = configureStore({
  reducer: {
    Cart: CartSlice, 
    categery: CategerySlice, 
    Search : SearchSlice,
  },
});

export default Store;
