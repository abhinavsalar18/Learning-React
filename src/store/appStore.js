import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice" 

// cartReducer is cartSlice.reducer which is exported default
const appStore = configureStore({
    
    // "reducer" bcz the store have only one big reducer
    reducer: {
        cart: cartReducer
    }
});


export default appStore;