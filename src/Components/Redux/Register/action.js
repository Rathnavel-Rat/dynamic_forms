import Axios from "../../axiosConfig";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";
export function registerRequest(){
    return{
        type:REGISTER_REQUEST
    }

}

export function registerFailure(error){
    return{
        type:REGISTER_FAILURE,
        payload:error
    }
}
export function registerSuccess(data){
    return{
        type:REGISTER_SUCCESS,
        payload:data
    }
}

export const RegisterApiCall=(data)=>{

    return (dispatch)=>{
        dispatch(registerRequest())        
        
        Axios().post("authentication/registration",data)
        .then(
            response=>{
                dispatch(registerSuccess(response.data))
            })
        .catch(
            error=>{
                if(error.response.data!=null)
                 {
                    var email_data=error.response.data["email"]  !=null ?error.response.data["email"] :""
                    var user_data=error.response.data["username"] !=null ?error.response.data["username"] :""
                    var error_message=email_data +"\n"+user_data 
                    dispatch(registerFailure(error_message))
                 }
                else{
                dispatch(registerFailure(error.message))
                }
            } )
        
    }
}