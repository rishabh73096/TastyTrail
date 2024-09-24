import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        Cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.Cart.push(action.payload);
        },
        removeToCart:(state,action)=>{
        state.Cart=state.Cart.filter((item)=> item.id != action.payload.id)
        }
    }
})

export const{addToCart,removeToCart} =CartSlice.actions;
export default CartSlice.reducer ;