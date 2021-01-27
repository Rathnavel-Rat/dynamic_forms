
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./types"
import Axios from "../../axiosConfig";
import {userDetails} from "../UserDetails/UserDetails"

export const loginRequest=()=>{
      return{
          type:LOGIN_REQUEST
      }
}

export const loginSuccess=(data)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const loginFailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}

export const LoginApiCall=(data)=>{
    return (dispatch)=>{
        dispatch(loginRequest())
        Axios().post("authentication/login",data)
        .then(
            response=>{
                try{

                   dispatch(loginSuccess(response.data))
                   dispatch(userDetails(response.data))
                   console.log("dfsff",response.data)
                }
                catch(e){
                    dispatch(loginFailure("try again later"))
                    
                }

               
            })
        .catch(
            error=>{
                try {
                   
                   if(error.response.data!=null) {
                       var email_data=error.response.data["detail"]
                       var error_message=email_data  
                       dispatch(loginFailure(error_message))
                    }}
                catch(e){
                      dispatch(loginFailure("Try again later"))
                }

               
            } )

    }
} 