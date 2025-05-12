import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categories/categories-slice'
import cartReducer from './cart/cart-slice'
const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer,
    }
})
export default store