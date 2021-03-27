import {REMOVE_FORM_ACCESS_ID, SET_FORM_ACCESS_ID} from "./type";


const initialState={
    access_id:null
}

export const RespondToFormReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_FORM_ACCESS_ID:
            return {
                ...state,
                access_id: action.data["access_id"]
            }
        case REMOVE_FORM_ACCESS_ID:
            return {
                ...state,
                access_id: null
            }
        default:
    return state
    }
}