import {DELETE__REQUEST, DELETE_FAILURE, DELETE_SUCCESS} from "./type";



const initState={
    loading:false,
    data:null,
}

export const DeleteFormReducer=(state=initState, action)=>{
    switch (action.type) {
        case DELETE__REQUEST:
            return{
                ...state,
                loading:true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        default:
            return  state
    }
}

