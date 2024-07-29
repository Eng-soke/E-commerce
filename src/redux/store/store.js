
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reduse/cart"
 const store = configureStore({

    reducer:{

        cart:cartSlice
    }
 })

 export default store;