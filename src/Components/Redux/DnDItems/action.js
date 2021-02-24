import {DRAG_EDITS,DEL_ALL_DRAGS, DRAG_ITEM_CHANGE_POSITION, DEL_AN_DRAGS} from './type'


export const DragEdit=(data)=>{
    return{
        type:DRAG_EDITS,
        data:data,
    }
}

export const  DeleteAnDrags=(data)=>{
    return{
        type:DEL_AN_DRAGS,
        data:data
    }
}

export const RemoveAllDrags=()=>{
  return {
      type:DEL_ALL_DRAGS,
  }
}

export const SetDragItem=(data)=>{

    return{
        type:DRAG_ITEM_CHANGE_POSITION,
        data:data,
    }
}