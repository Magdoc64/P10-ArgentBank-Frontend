import { createAsyncThunk } from "@reduxjs/toolkit"

export const userLogin = createAsyncThunk('auth/login',
    async ({ email, password }, rejectWithValue) => {
        try{
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({email, password})}
            )
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.data.message)
        }
    }
)

    
  

