import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "./authApi";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (userData, thunkApi) => {
        try {
            return await loginApi(userData);
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);            
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkApi) => {
        try {
            console.log("register thunk: ", userData);
            const response = await registerApi(userData);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);            
        }
    }
);