import { createAsyncThunk } from "@reduxjs/toolkit"

export const user = createAsyncThunk('user',
    async ({ userToken}, {rejectWithValue}) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method:'GET',
                headers: {'Authorization': `Bearer ${userToken}`}
            })
            const userData = await response.json();
            return userData

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)