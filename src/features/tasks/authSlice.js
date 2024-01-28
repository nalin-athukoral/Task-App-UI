import { createSlice} from '@reduxjs/toolkit';

// This slice for authentication of user and storing user data in localstorage 
const initialState = {
    isauthenticated: false,
    user: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isauthenticated = true;
            state.user = action.payload;
            console.log(action.payload);
        },
        logout: (state) => {
            state.isauthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
