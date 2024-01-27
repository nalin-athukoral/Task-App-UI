import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import { apiSlice } from "../api/apiSlice";
import apitaskSlice from "../features/tasks/apitaskSlice"; 
import authSlice from '../features/tasks/authSlice';


export const store = configureStore({
    reducer: {
        task: taskReducer,
        apiTask: apitaskSlice,
        auth: authSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

