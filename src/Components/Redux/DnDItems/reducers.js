import { DEL_ALL_DRAGS,DEL_AN_DRAGS, DRAG_EDITS, DRAG_ITEM_CHANGE_POSITION } from "./type"


const initstate={
    fields:[]
}

export const DndReducers=(state=initstate,action)=>{
    switch(action.type){


        case DRAG_EDITS:
            return {
                ...state,
            }         
        case DEL_AN_DRAGS:        
            const removedItem= state.fields.filter(e => e.getUid() !== action.data)        
            return{
                fields:removedItem
            }

        case DEL_ALL_DRAGS:
            return{
                fields:[],
            }  
          
        case DRAG_ITEM_CHANGE_POSITION:
            return{
                fields:action.data
            }
        default:
            return state;
    }
}
