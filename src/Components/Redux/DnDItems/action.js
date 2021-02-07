import {DRAG_END,DRAG_EDITS,DEL_ALL_DRAGS} from './type'

export const DragItemAdd=(data)=>{
     return{
         type:DRAG_END,
         data:data,

     }
}

export const DragEdit=(data)=>{
    return{
        type:DRAG_EDITS,
        data:data,
    }
}

export const RemoveAllDrags=()=>{
  return {
      type:DEL_ALL_DRAGS,
  }
}