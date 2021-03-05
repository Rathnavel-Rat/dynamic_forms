import {ADD_NEW_FORM, REQUEST_CREATED_FORM, REQUEST_CREATED_FORM_FAILURE, REQUEST_CREATED_FORM_SUCCESS} from "./type";

const initState={
    loading:false,
    data:[],
    message:"",

}


export const CreatedFormReducer=(state=initState,action)=>{
    switch (action.type) {
        case REQUEST_CREATED_FORM:
            return{
                ...state,
                loading:true
            }
        case  REQUEST_CREATED_FORM_SUCCESS:
            return{
                ...state,
                data:action.payload,
                message: "success"
            }
        case REQUEST_CREATED_FORM_FAILURE:
            return {
                ...state,
                message: "Try again"
            }
        case ADD_NEW_FORM:
            return{
                ...state,
        }
        default:
            return state
    }
}