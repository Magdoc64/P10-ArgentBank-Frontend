import { createAsyncThunk } from "@reduxjs/toolkit"

export const profile = createAsyncThunk('user/profile',
    async ({ token, userName}, {rejectWithValue}) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method:'PUT',
                headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
                body: JSON.stringify ({userName})
            })
            const profileData = await response.json();
            return profileData

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)