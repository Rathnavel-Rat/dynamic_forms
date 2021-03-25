import {DELETE__REQUEST, DELETE_FAILURE, DELETE_SUCCESS} from "./type";
import Axios from "../../axiosConfig";
import {FetchCreatedFormAPICall} from "../CreatedForm/actions";


export const DeleteRquest=()=>{
    return{
        type:DELETE__REQUEST,
    }
}
export const DeleteRequestSuccess=(data)=>{
    return{
        type:DELETE_SUCCESS,
        data:data
    }
}
export const DeleteRequestFaliure=(data)=>{
    return{
        type:DELETE_FAILURE,
        data:data
    }
}

export const DeleteFormApiCall=(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=> {
        dispatch(DeleteRquest())
        Axios()
            .delete("dynamicforms/DeleteForm",{
            params:{
                form_id:data.id
            }
        }).then(request=> {
              dispatch(DeleteRequestSuccess(request.data.data))
              dispatch(FetchCreatedFormAPICall())
            return resolve(true)
        } ).catch(request=>{
            console.log(request.data)
            dispatch(DeleteRequestFaliure(request.data.data))
            return reject(false)
        })
    })
}