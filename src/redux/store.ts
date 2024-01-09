import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/features/auth-slice'
import { auth } from '../redux/features/auth-slice'


export const store = configureStore ({
    reducer:{
        'authReducer':auth.reducer
    },

})

export type RootState = ReturnType<typeof  store.getState>
export type AppDispatch = typeof store.dispatch;

