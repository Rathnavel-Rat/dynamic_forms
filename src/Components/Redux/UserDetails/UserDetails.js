import Axios from "../../axiosConfig"

const USER_DETAILS="USER_DETAILS"
const LOGOUT="LOGOUT"

export const userDetails=(data)=>{
    return{
        type:USER_DETAILS,
        payload:data
    }
}
export const logout=()=>{
    return{
        type:LOGOUT,
        
    }
}

const initState={
    username:{},
    email:{},
    islogin:false,
}
export const userDetailReducer=(state=initState,action)=>{
    switch(action.type){
        case USER_DETAILS:
            return{
                ...state,
                username:action.payload.data["username"],
                email:action.payload.data["email"],
                uid:action.payload.data["id"],
                islogin:true,
            }
        case LOGOUT:
            return{
                islogin:false,
            }
        default: return state
    }
}

export const LogoutApiCall=()=>{
    return (dispatch)=>{
        Axios().post("authentication/logout").then(
            response=>{
                dispatch(logout())
            }
          ).catch(err=>{
    
          })
       
    }
}


