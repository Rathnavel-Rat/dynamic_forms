const CURRENT_FORM="CURRENT_FORM"
const RESET_CURRENT_FORM="RESET_CURRENT_FORM"
export const CurrentForm=(data)=>{
    return{
        type:CURRENT_FORM,
        data:data
    }
}
export const ResetForm=()=>{
    return{
        type:RESET_CURRENT_FORM,
    }
}

const initState={
    bindata:null,
    id:null,
    name:null,
}
export const CurrentFormReducer=(state=initState,action)=>{
    console.log(action.data)
    switch (action.type) {
        case CURRENT_FORM:
            return {
                ...state,
                bindata: action.data.data,
                id:action.data.form_id,
                name:action.data.name,
            }
        case  RESET_CURRENT_FORM:
            return {
                ...state,
                bindata:null,
                id:null,
                name:null
            }
        default:
            return state
    }
}
