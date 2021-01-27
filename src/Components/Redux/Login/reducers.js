
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./types"

const initialState={
    loading:false,
    data:{},
    message:"",
    islogin:false,
 
}

export const LoginRequestReducers=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                message:"login success",
                islogin:true
               
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                laoding:false,
                data:{},
                message:action.payload,
                islogin:false
                
            }
        default: return state
    }

}
export  default LoginRequestReducers