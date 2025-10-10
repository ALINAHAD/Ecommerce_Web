import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const store=configureStore({
    reducer:{
        cartSlice:cartReducer,  // state value is stored in cartState (cartState is variable it stores the staes or values in object form) from cartSlice component
    }
});

export default store; 