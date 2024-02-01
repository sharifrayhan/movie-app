import { configureStore } from "@reduxjs/toolkit"
import {CounterReducer} from "./slices/counterSlice"
import { MoviesReducer } from "./slices/moviesSlice"

// Store banate hobe
export const store = configureStore({
    reducer: {
      counter: CounterReducer,
      movies: MoviesReducer
    },
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
