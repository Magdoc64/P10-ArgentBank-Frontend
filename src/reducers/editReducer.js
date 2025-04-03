import { createSlice } from '@reduxjs/toolkit'


const editSlice = createSlice({
    name: 'edit',
    initialState:{status:false},
    reducers: {
        isOpened:(state) => {
            state.status = true
        },
        isClosed: (state) => {
            state.status = false
        }
    },
    
})

export const {isOpened, isClosed} = editSlice.actions

export default editSlice.reducer