import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState ={
    value: 0
}

const CounterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByNumber: (state, action) =>{
            state.value += action.payload
        }
    }
})

export const { increment, decrement,  incrementByNumber } = CounterSlice.actions
export  const CounterReducer = CounterSlice.reducer;