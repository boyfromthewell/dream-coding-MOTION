import {configureStore} from "@reduxjs/toolkit"
import motionSlice from "./motionSlice"

export const store=configureStore({
    reducer:{
        motion:motionSlice
    }
})