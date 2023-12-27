import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../reducers/fetchAllUsers";

const initialState ={
    users: []
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchAllUsers.fulfilled,(state,action)=>{
            state.users = action.payload;
        })
    }
})

export const {} = usersSlice.actions

export default usersSlice.reducer
// builder.addCase( fetchAddUsers.fulfilled,(state,action)=>{
        //     // state.users.push(action.payload)
        // })