import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    movies: null
}
const movieslice= createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setmovies: (state, action)=>{
            state.movies= action.payload;
        }
    }
})
export const {setmovies}= movieslice.actions;
export const selectmovies= (state)=> state.movie.movies;
export default movieslice.reducer;