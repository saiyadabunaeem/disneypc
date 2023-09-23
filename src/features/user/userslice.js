import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    name: '',
    email: '',
    photo: ''
}
const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action)=>{
            state.name= action.payload.name;
            state.email= action.payload.email;
            state.photo= action.payload.photo;
        },
        logout: (state, action)=>{
            state.name= null;
            state.email= null;
            state.photo= null;
        }

    }
})
export const {login,logout}= userSlice.actions;
export const selectN=  (state)=> state.user.name;
export const selectE=  (state)=> state.user.email;
export const selectP=  (state)=> state.user.photo;
export default userSlice.reducer;