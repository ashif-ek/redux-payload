import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice ({
    name: 'counter',
    initialState: {value:0},
    reducers:{
        increment: (state, action ) => {state.value += action.payload},
        decrement: (state, action) => {state.value -= action.payload},
        previous: (state, action) => {state.value *= action.payload}
    }
})

export const {increment, decrement, previous} = counterReducer.actions;
export default counterReducer.reducer