import { createSlice } from "@reduxjs/toolkit";

// This slice for route protection and storing user data in localstorage
const initialState = {
    user: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null,
};

const routeSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsFetching : (state, action) => {
            state.user = action.payload;
            console.log(action.payload);
        },
    },
});

export const { setIsFetching } = routeSlice.actions;
export default routeSlice.reducer;