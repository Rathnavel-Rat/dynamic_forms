const USER_DETAILS="USER_DETAILS"

export const userDetails=(data)=>{
    return{
        type:USER_DETAILS,
        payload:data
    }
}

const initState={
    username:{},
    email:{},
    uid:{},
    islogin:false,
}
export const userDetailReducer=(state=initState,action)=>{
    switch(action.type){
        case USER_DETAILS:
            return{
                ...state,
                username:action.payload.data["username"],
                email:action.payload.data["email"],
                uid:action.payload.data["uid"],
                islogin:true,

            }
        default: return state
    }
}


