import {createSlice} from '@reduxjs/toolkit'


const interestReducer = createSlice({

    name:"interest",
    initialState:[],
    reducers:{
        addInterests:(state,action)=>{
            return [...state,action.payload] 
        },
        removeInterest:(state,action)=>{
            return state.filter((state)=>state !== action.payload)
        }
    }
})

export const {addInterests,removeInterest} = interestReducer.actions
export default interestReducer.reducer