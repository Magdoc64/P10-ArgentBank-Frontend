import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/authAction';

const initialState = {
    loggedIn:false,
    userToken:null,
    loading:false,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.loggedIn = false;
            state.userToken = null;
            state.loading = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.loggedIn = true;
            state.userToken = payload.body.token;
            state.loading = false;
            state.error = null;
            state.success = true;
            localStorage.setItem('userToken', payload.body.token);
        })
        builder.addCase(userLogin.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer

