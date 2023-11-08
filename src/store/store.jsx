import { configureStore } from "@reduxjs/toolkit";
import  mainReducer  from "./mainSlice";
import educationSlice from "./educationSlice";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        education : educationSlice
    }
})