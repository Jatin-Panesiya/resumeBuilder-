import { configureStore } from "@reduxjs/toolkit";
import  mainReducer  from "./mainSlice";
import educationSlice from "./educationSlice";
import  skillReducer  from "./skillSlice";
import interestSlice from "./interestSlice";
import  experienceReducer from "./experienceSlice";


export const store = configureStore({
    reducer: {
        main: mainReducer,
        education : educationSlice,
        skill : skillReducer,
        interest : interestSlice,
        experience : experienceReducer
    }
})