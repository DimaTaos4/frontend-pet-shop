import { fetchCategories } from "./categories-thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const pending = (store) => {
    store.loading = true;
    store.error = null;
}
const rejected = (store, action) => {
    store.loading = false;
    store.error = action.payload
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, pending)
            .addCase(fetchCategories.fulfilled, (store, action) => {
                store.loading = false;
                store.items = action.payload;
            })
            .addCase(fetchCategories.rejected, rejected)
    }
})
export default categoriesSlice.reducer