import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: false,
}

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        openHamburger: (store) => {
            store.isOpened = !store.isOpened;
        },
        closeHamburger: (store) => {
            store.isOpened = false;
        }
    }
})
export const { openHamburger, closeHamburger } = hamburgerSlice.actions
export default hamburgerSlice.reducer