import {createSlice ,PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    value : AuthState;
}
type AuthState = {
    isAuth :boolean;
    userName :string;
    uid:string,
    isModerator : boolean
}

const initialState ={
    value : {
        isAuth : false,
        userName:'sami',
        uid:'',
        isModerator : false ,
    } as AuthState ,
} as InitialState ;

export const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout : () =>{
            return
        },

        login :(state, action : PayloadAction<string>) =>{
            return{
                value :{
                    isAuth : !state.value.isAuth,
                    userName:action.payload,
                    uid:'',
                    isModerator : false ,
                }
            }
        }
    }
})

export const {login , logout} = auth.actions

export default auth.reducer;
