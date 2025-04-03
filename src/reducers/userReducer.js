import { createSlice } from '@reduxjs/toolkit'
import { user } from '../actions/userAction'

const initialState = {
    user:{},
    loading:false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(user.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(user.fulfilled, (state, {payload}) => {
            state.user = payload.body;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(user.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default userSlice.reducer