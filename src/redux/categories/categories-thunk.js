import { createAsyncThunk } from "@reduxjs/toolkit";
import getCategories from "../../shared/api/categories-api";
export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async (_, { rejectWithValue }) => {
        const { data, error } = await getCategories();
        if (error) {
            return rejectWithValue(error?.response?.data?.message || error.message || "Unknown error");
        }
        return data;
    }
);