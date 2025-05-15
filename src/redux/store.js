import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesReducer from './categories/categories-slice'
import cartReducer from './cart/cart-slice'
import { combineReducers } from 'redux'
import hamburgerReducer from './hamburger/hamburger-slice'
const rootReducer = combineReducers({
    categories: categoriesReducer,
    cart: cartReducer,
    hamburger: hamburgerReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
