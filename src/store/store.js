import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import routeReducer from "../features/tasks/routeSlice";
import { apiSlice } from "../api/apiSlice";
import apitaskSlice from "../features/tasks/apitaskSlice";
import authSlice from '../features/tasks/authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = persistReducer(persistConfig, routeReducer);


export const store = configureStore({
    reducer: {
        task: taskReducer,
        apiTask: apitaskSlice,
        auth: authSlice,
        user: routeReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(apiSlice.middleware),
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

