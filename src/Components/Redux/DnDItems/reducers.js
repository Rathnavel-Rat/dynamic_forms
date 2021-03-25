import {
    DEL_A_PAGE,
    DEL_ALL_DRAGS,
    DEL_AN_DRAGS, DEL_ELEMENTS_PAGE,
    DND_ADD_PAGE, DRAG_BTWN_PAGE,
    DRAG_EDITS,
    DRAG_ITEM_CHANGE_POSITION,
    LOAD_PAGE
} from "./type"


const initstate={
    fields:[],
    formPage:{},
}

export const DndReducers=(state=initstate,action)=>{
    switch(action.type){
        case DRAG_EDITS:
            return {
                ...state,
            }         
        case DEL_AN_DRAGS:
            const coresspondingPageField ={...state.formPage}[action.data["formId"]]
            const deleted=coresspondingPageField.page.getFieldsList().filter(e=> e.getUid()!==action.data["elementId"])
            const updated=coresspondingPageField.page.setFieldsList(deleted)
            return{
                formPage: {
                   ...state.formPage,
                    [action.data["formId"]]:{id:action.data["formId"],page:updated}
                }
            }

        case DEL_ALL_DRAGS:
            return{
                formPage: {}
            }  
          
        case DRAG_ITEM_CHANGE_POSITION:

            return{
                ...state,
                formPage: {
                    ...state.formPage,
                    [action.data["id"]]:{id:action.data["id"],page:{...state.formPage[action.data["id"]]}.page.setFieldsList(action.data["list"])}
                }
            }

        case DND_ADD_PAGE:

            return {
                ...state,
                formPage:{
                    ...state.formPage,
                    [action.data.id]:action.data

                }

            }
        case LOAD_PAGE:
            return {
                ...state,
                formPage: action.data
            }
        case DEL_A_PAGE:
             const {[action.data["id"]]:value,...remaining_items}={...state.formPage}
            return {
                ...state,
                formPage: remaining_items
            }
        case DEL_ELEMENTS_PAGE:
            return {
             ...state,
             formPage: {
                 ...state.formPage,
                 [action.data["id"]]:{id:action.data["id"],page:{...state.formPage[action.data["id"]]}.page.setFieldsList([])}
             }
            }
        case  DRAG_BTWN_PAGE:

            return {
                ...state,
                formPage: {
                    ...state.formPage,
                    [action.data["sourceid"]]: {id:action.data["sourceid"],page:{...state.formPage[action.data["sourceid"]]}.page.setFieldsList(action.data["source"])},
                    [action.data["destinationid"]]: { id:action.data["destinationid"],page:{...state.formPage[action.data["destinationid"]]}.page.setFieldsList(action.data["destination"])}
                }
            }
        default:
            return state;
    }
}
