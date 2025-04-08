import { configureStore } from '@reduxjs/toolkit'
import authSlice from "../reducers/authReducer";
import userSlice from "../reducers/userReducer"
import profileSlice from "../reducers/profileReducer"
import editSlice from "../reducers/editReducer"
import errorSlice from "../reducers/errorReducer"

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    profile: profileSlice,
    edit: editSlice,
    error: errorSlice,
  },
  devTools: true
})