import { createSlice } from "@reduxjs/toolkit";

const CategerySlice = createSlice({
    name:"categery",
    initialState:"All",
    reducers:{
        setCategory:(state,action)=>{
            return action.payload
        },
    },
})

export const {setCategory} = CategerySlice.actions
export default CategerySlice.reducer; 