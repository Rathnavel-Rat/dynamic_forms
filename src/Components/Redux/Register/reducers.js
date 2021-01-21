import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types"



const initialState={
    loading:false,
    error:"",
    message:""
}

const RegisterRequestReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
            return{
                ...state,
                loading:true,
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading:false,
                error:"",
                message:"verifivation link has been sent to your email"

            }
       
        case REGISTER_FAILURE:
            return{
                ...state,
                loading:false,
                error:"Try again later",
                message:action.payload
            }
      
        default: return state
    }
}


export default RegisterRequestReducer