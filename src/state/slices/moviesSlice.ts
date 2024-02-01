import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Movie {
    Title: string;
    Poster: string;
    Year: number;
    Runtime: string;
}

interface MoviesState {
    data: Movie[];
    status: string;
}

const initialState: MoviesState = {
    data: [],
    status: "idle",
};


const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getMovies.fulfilled, (state, action)=>{
            state.data = action.payload
            state.status = "idle"
        })

        .addCase(getMovies.pending, (state, action)=>{
            state.status = "loading"
        })

        .addCase(getMovies.rejected, (state, action)=>{
            state.status = "failed to load movies"
        })
    }
})

export const getMovies = createAsyncThunk("movies/get", async()=>{
    const data = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    const result = await data.json()
    return result
})

export const {  } = MoviesSlice.actions
export const MoviesReducer = MoviesSlice.reducer;