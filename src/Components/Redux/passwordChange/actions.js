import Axios from "../../axiosConfig";
import { PASSWORD_REQUEST, PASSWORD_REQ_FAILURE, PASSWORD_REQ_SUCCESS, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from "./types"


const passwordChangeRequest=()=>{
     return{
         type:PASSWORD_REQUEST         
}
}

const passwordChangeReqSuccces=(data)=>{
    return{
        type:PASSWORD_REQ_SUCCESS,
        payload:data
    }
}

const passwordChangeReqFaiure=(error)=>{
    return{
        type:PASSWORD_REQ_FAILURE,
        payload:error
    }
}

const  passwordResetRquest=()=>{
    return{
        type:PASSWORD_RESET_REQUEST         
       }
}

const passwordResetSuccess=(data)=>{
    return{
        type:PASSWORD_RESET_SUCCESS,
        payload:data
    }
}

/*const passwordResetFailure=(error)=>{
    return{
        type:PASSWORD_RESET_FAILURE,
        payload:error
    }
}*/

export const PasswordRequestAPI=(data)=>{
    return (dispatch)=>{
        dispatch(passwordChangeRequest())
        Axios().post("/authentication/RequestPasswordChange",data)
               .then(response=>{
                   if(response.data["success"]===true){
                   dispatch(passwordChangeReqSuccces("check your email for verification"))
                }
                else{
                    dispatch(passwordChangeReqSuccces("something went wrong"))
                }
               })
               .catch(error=>{
                try {
                   
                    if(error.response.data!==null){
                        dispatch(passwordChangeReqFaiure(error.response.data["detail"]))
                    }
                }
                catch(e){
                    dispatch(passwordChangeReqFaiure("try again later"))
                }
                  
               })
    }
}

export const PasswordResetAPI=(data)=>{
    return (dispatch)=>{
        dispatch(passwordResetRquest())
        Axios().patch("authentication/SetNewPassword",data).then( respsone=>{
           
           if(respsone.data["success"]===true){
               dispatch(passwordResetSuccess("password reset Successfully"))
           }
      }
    ).catch(error=>{
        if(error.response.status!==404)
          dispatch(passwordResetSuccess("password reset Successfully"))
        else
         dispatch(passwordResetSuccess("Try again later"))
    
    })
  }
        

}