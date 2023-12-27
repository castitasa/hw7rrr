import { createAsyncThunk } from "@reduxjs/toolkit";
import {getAllUsers} from '../../api/index';

const fetchAllUsers = createAsyncThunk(
    'users/getUsers',
    async (payload, thunkAPI) => {
        const response = await getAllUsers()
        console.log(response);
        return response.data
       
    }
)

export { fetchAllUsers }

// try {
        //     const response = await getAllUsers()
        //     const data = await response.json()
        //     console.log(data);
        // }catch (err){
        //     thunkAPI.rejectWithValue('err')
        // }