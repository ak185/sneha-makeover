import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: false,
    isAuthenticated: false
}

const authSlice = createSlice({
        name: "auth",
        initialState,
        reducers: {
            logout(state) {
                state.user = null;
                state.token = null;
                state.loading = false;
                state.error = false;
                state.isAuthenticated = false;
            }
        },
        extraReducers: (builder) => {
            // login
            builder.addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

            // register
            builder.addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                console.log("action:", action);
                
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        }
    }
);

export const {logout} = authSlice.actions;
export default authSlice.reducer;