import { act } from "react-dom/test-utils"
import { DEL_ALL_DRAGS, DRAG_EDITS, DRAG_END } from "./type"


const initstate={
    fields:[]
}

export const DndReducers=(state=initstate,action)=>{
    switch(action.type){
        
        case DRAG_END:

            return{
                ...state,
                fields:[...state.fields,action.data]
            }
        case DRAG_EDITS:
            const index = state.fields.findIndex(e => e.uid === action.data.uid); //finding index of the item
            const newArray = [...state.fields]; //making a new array
            newArray[index].modalOpen=action.data.modalOpen//changing value in the new array
        
           
            return {
                ...state,
                fields:newArray
                
            }                
        case DEL_ALL_DRAGS:
            return{
                fields:[],
            }    
        default:
            return state;
    }
}
