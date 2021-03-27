import {REMOVE_FORM_ACCESS_ID, SET_FORM_ACCESS_ID} from "./type";

export const SetFormAccessId=(data)=>{
    return{
        type:SET_FORM_ACCESS_ID,
        data:data
    }
}

export const RemoveFormAccessId=()=>{
    return{
        type:REMOVE_FORM_ACCESS_ID,
    }
}