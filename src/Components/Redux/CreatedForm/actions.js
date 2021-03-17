import {ADD_NEW_FORM, REQUEST_CREATED_FORM, REQUEST_CREATED_FORM_FAILURE, REQUEST_CREATED_FORM_SUCCESS} from "./type";
import Axios from "../../axiosConfig";
import {base64ToArrayBuffer} from "../../CreateForms/utils";

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



export const FetchCreatedFormAPICall=()=>{
    return (dispatch)=>{
        dispatch(Req_Created_Form());
        Axios()
            .get("dynamicforms/getStoredForms")
            .then(e=>{
                dispatch(Req_Created_Form_Success(e.data))})
            .catch(e=>{
                dispatch(Req_Created_Form_failure(e.response.data.data))})
    }
}

export const AddNewFormApiCAll=(data)=>(dispatch)=>{
      return new Promise((resolve,reject)=> {
           dispatch(Req_Created_Form())
           Axios()
               .post("dynamicforms/addNewForm", data)
               .then(e => {
                   dispatch(Req_Created_Form_Success(e.data.data))
                   return  resolve(true)
               })
               .catch(e => {
                   dispatch(Req_Created_Form_failure(e.response.data.error))
                   return  reject(false)
               })
       })
}


export const FetchBinaryDataApiCall=(data)=>(dispatch)=>{
       return new Promise((resolve, reject) => {
        Axios().get("dynamicforms/GetBinaryFormData", {
            params: {
                form_id: data.form_id,
            }
        }).then(e=>{
                    resolve({"data":e.data})
                   }).catch(e => resolve({sucess:false}))
       })
}
