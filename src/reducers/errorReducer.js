import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/authAction'
import { profile } from '../actions/profileAction'

const errorSlice = createSlice({
    name: 'error',
    initialState:[],
    reducers: {
        errorInit: (state) => {
            state.splice(0, state.length)
        },
        errorEmail:(state) => {
            state.push("L'email est obligatoire")
        },
        errorPassword: (state) => {
            state.push("Le mot de passe est obligatoire.")
        },
        errorUserName: (state) => {
            state.push("Une erreur s'est produite. Veuillez réessayer.")
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            if (action.payload.status === 200){
                state.splice(0, state.length);
            }
            if (action.payload.status === 400){
                state.push("Les identifiants utilisés ne sont pas reconnus. Rééssayer ou créer un compte");
            }
        })
        builder.addCase(userLogin.rejected, (state) => {
            state.push("Une erreur s'est produite. Veuillez réessayer")
        })
        builder.addCase(profile.fulfilled, (state, action) => {
            if (action.payload.status === 200){
                state.splice(0, state.length);
            }
            if (action.payload.status === 400){
                state.push("Vous n'êtes pas autorisé à modifier cette information");
            }
        })
        builder.addCase(profile.rejected, (state) => {
            state.push("Une erreur s'est produite. Veuillez réessayer")
        })
    }
})

export const {errorInit, errorEmail, errorPassword, errorLogin, errorUserName} = errorSlice.actions

export default errorSlice.reducer