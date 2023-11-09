import { createSlice } from "@reduxjs/toolkit";

export const experienceReducer = createSlice({
    name: 'experience',
    initialState: [],
    reducers: {
        addExperience: (state, action) => {
            return [...state, action.payload]
        },
        removeExperience: (state, action) => {
            return state.filter((state) => state.id !== action.payload)
        }
    }
})

export const { addExperience,removeExperience } = experienceReducer.actions
export default experienceReducer.reducer