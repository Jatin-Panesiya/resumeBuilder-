import { createSlice } from '@reduxjs/toolkit'

export const skillReducer = createSlice({
    name: "skills",
    initialState: [],
    reducers: {
        addSkills: (state, action) => {
            return [...state, ...action.payload]
        },
        removeSkills: (state, action) => {
            return state.filter((skill) => skill !== action.payload)
        }
    }
})

export const { addSkills,removeSkills } = skillReducer.actions
export default skillReducer.reducer