import { createAsyncThunk } from "@reduxjs/toolkit";
import {addUser} from '../../api';

const fetchAddUsers = createAsyncThunk(
    'users/getUsers',
    async (payload, thunkAPI) => {
        const response = await addUser(payload)
        console.log(response);
        return payload
       
    }
)

export { fetchAddUsers }
