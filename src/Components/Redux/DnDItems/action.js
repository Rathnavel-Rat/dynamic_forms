import {
    DRAG_EDITS,
    DEL_ALL_DRAGS,
    DRAG_ITEM_CHANGE_POSITION,
    DEL_AN_DRAGS,
    DND_ADD_PAGE,
    LOAD_PAGE,
    DEL_A_PAGE, DEL_ELEMENTS_PAGE, DRAG_BTWN_PAGE
} from './type'


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

export const AddFormPage=(data)=>{
    return{
        type:DND_ADD_PAGE,
        data:data
    }
}

export const LoadPage=(data)=>{
    return{
        type:LOAD_PAGE,
        data:data
    }
}
export const DeleteAPage=(data)=>{
    return{
        type:DEL_A_PAGE,
        data:data
    }
}
export const DeleteAllElementsInAPage=(data)=>{
    return{
        type:DEL_ELEMENTS_PAGE,
        data:data
    }
}

export const Swap_Between_Page=(data)=>{
    return{
        type:DRAG_BTWN_PAGE,
        data:data
    }
}