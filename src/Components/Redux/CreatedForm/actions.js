import {REQUEST_CREATED_FORM, REQUEST_CREATED_FORM_FAILURE, REQUEST_CREATED_FORM_SUCCESS} from "./type";
import Axios from "../../axiosConfig";

export const Req_Created_Form=()=>{
    return{
        type:REQUEST_CREATED_FORM
    }

}

export const Req_Created_Form_Success=(data)=>{
    return{
        type:REQUEST_CREATED_FORM_SUCCESS,
        payload:data
    }

}
export const Req_Created_Form_failure=(data)=>{
    return{
        type:REQUEST_CREATED_FORM_FAILURE,
        payload:data
    }

}

export const CreatedFormAPICall=()=>{
    return (dispatch)=>{
        dispatch(Req_Created_Form());
        Axios()
            .get("dynamicforms/getStoredForms")
            .then(e=>{
                      dispatch(Req_Created_Form_Success(e.data))
                    })
            .catch(e=>{
                 dispatch(Req_Created_Form_failure(e.response.data))
            })

    }
}