import { createSlice } from '@reduxjs/toolkit'
import {profile} from '../actions/profileAction'

const initialState = {
    user:{},
    loading:false,
    error: null,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(profile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(profile.fulfilled, (state, {payload}) => {
            if(payload.status === 200){
                state.user = payload.body;
                state.loading = false;
                state.error = null;
            }
            if(payload.status === 400){
                state.loading = false;
                state.error = "Vous n'êtes pas autorisé à faire des modifications";
            }
        })
        builder.addCase(profile.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default profileSlice.reducer