import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MotionState {
    id:number;
    title:string;
    body:string;
    type:string;
}
export interface CommonState {
    motionList: MotionState[]
}

const initialState: CommonState= {
    motionList: []
}

const motionSlice=createSlice({
    name:"motion",
    initialState,
    reducers:{
        ADD_MOTION(state, action:PayloadAction<MotionState[]>){
            state.motionList = action.payload;
        },
        DEL_MOTION(state, action:PayloadAction<MotionState[]>){
            state.motionList = action.payload;
        }
    }
})

export const { ADD_MOTION, DEL_MOTION } = motionSlice.actions;
export default motionSlice.reducer;
