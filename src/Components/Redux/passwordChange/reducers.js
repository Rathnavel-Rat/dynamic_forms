
import { PASSWORD_REQ_FAILURE, PASSWORD_REQ_SUCCESS,PASSWORD_REQUEST, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILURE } from "./types"

const initState={
    loading:false,
    success:null,
    message:"",

}

export const PasswordChangeReducer=(state=initState,action)=>{
    switch(action.type){
        case PASSWORD_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case PASSWORD_REQ_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                message:action.payload
            }
        case PASSWORD_REQ_FAILURE:
            return{
                ...state,
                loading:false,
                success:false,
                message:action.payload
            }
        case PASSWORD_RESET_REQUEST:
            return{
                ...state,
                loading:true,
                
            }
        case PASSWORD_RESET_SUCCESS:
            return{
                ...state,
                loading:true,
                success:true,
                message:action.payload
            }
        case PASSWORD_RESET_FAILURE:
            return{
                ...state,
                loading:false,
                success:true,
                message:action.payload
            }

        
        default: return state
    }

}

