import {
    GET_FORM_RESPONSES_REQUEST,
    GET_FORM_RESPONSES_REQUEST_FAILURE,
    GET_FORM_RESPONSES_REQUEST_SUCCESS, RESET_FORM_RESPONSES
} from "./type";
import {RequestFormRepsonses, RequestFormRepsonsesFailure, RequestFormRepsonsesSuccess} from "./actions";
import Axios from "../../axiosConfig";



const initState={
     form_id:null,
     message:"",
     list:null
}
export const FromResponseReducers=(state=initState,action)=>{
    switch (action.type) {
        case GET_FORM_RESPONSES_REQUEST:
            return {
                ...state,
                message: "fetching"
            }
        case GET_FORM_RESPONSES_REQUEST_FAILURE:
            return {
                ...state,
                message: "Failed"
            }
        case GET_FORM_RESPONSES_REQUEST_SUCCESS:
            return {
                ...state,
                message: "success",
                form_id :action.data["Form"],
                list:action.data["List"],
                name:action.data["FormName"]
            }
        case RESET_FORM_RESPONSES:
            return {
                ...state,
                name:"",
                form_id:"",
                message:"",
                list:null

            }
        default:
            return state

    }
}

export const GetFormResponsesApiCall=(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=> {
        dispatch(RequestFormRepsonses())
        Axios().post("dynamicforms/GetResponse",{"Form":data.form_id}).then(e=>{
            dispatch(RequestFormRepsonsesSuccess(e.data["data"]))
            return resolve({isSuccess:true})
        }).catch(e=>{
            dispatch(RequestFormRepsonsesFailure())
            return reject({isSuccess:false})
        })


    })
}