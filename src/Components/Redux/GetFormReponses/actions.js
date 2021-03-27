import {
    GET_FORM_RESPONSES_REQUEST,
    GET_FORM_RESPONSES_REQUEST_FAILURE,
    GET_FORM_RESPONSES_REQUEST_SUCCESS, RESET_FORM_RESPONSES
} from "./type";

export const RequestFormRepsonses=()=>{
    return{
        type:GET_FORM_RESPONSES_REQUEST,
    }
}

export const RequestFormRepsonsesSuccess=(data)=>{
    return{
        type:GET_FORM_RESPONSES_REQUEST_SUCCESS,
        data:data

    }
}
export const RequestFormRepsonsesFailure=(data)=>{
    return{
        type:GET_FORM_RESPONSES_REQUEST_FAILURE,
        data:data

    }
}
export const ResetFormResponses=()=>{
    return{
        type:RESET_FORM_RESPONSES,

    }
}