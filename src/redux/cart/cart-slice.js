import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantityNumber: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity })
            }
        },
        deleteFromCart: (store, action) => {
            store.cart = store.cart.filter(item => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (store) => {
            store.cart = [];
        }
    }
})

export const { addToCart, deleteFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer