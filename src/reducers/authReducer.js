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
        loginit: (state) => {
            state.loggedIn = false;
            state.userToken = null;
            state.loading = false;
            state.error = null;
            state.success = false;
        },
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
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loggedIn = true;
            if (action.payload.status === 200){
                state.userToken = action.payload.body.token;
                localStorage.setItem('userToken', action.payload.body.token);
                state.error = null
                state.loading = false;
                state.success = true;
            }
            if (action.payload.status === 400){
                state.error = action.payload.message
                state.loading = false;
                state.success = false;
            }
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { loginit, logout } = authSlice.actions;

export default authSlice.reducer

