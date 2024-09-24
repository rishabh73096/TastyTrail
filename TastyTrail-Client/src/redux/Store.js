import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx" ;

const Store = configureStore({
    reducer:{
    Cart:CartSlice,
    },
})
export default Store;