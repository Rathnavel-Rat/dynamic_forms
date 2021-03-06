import { combineReducers } from "redux";

import LoginRequestReducers from "../Redux/Login/reducers";
import { PasswordChangeReducer } from "../Redux/passwordChange/reducers";
import RegisterRequestReducer from "../Redux/Register/reducers";
import { userDetailReducer } from "../Redux/UserDetails/UserDetails";
import {DndReducers} from "../Redux/DnDItems/reducers"
import {CreatedFormReducer} from "../Redux/CreatedForm/reducers";
import {CurrentFormReducer} from "../Redux/currentForm/currentForm";
import {DeleteFormReducer} from "../Redux/DeleteForm/reducer";
import {RespondToFormReducer} from "../Redux/RespondToForm/reducers";
import {FromResponseReducers} from "../Redux/GetFormReponses/reducers";

 const rootReducers =combineReducers({
     register:RegisterRequestReducer,
     login:LoginRequestReducers,
     userdetails:userDetailReducer,
     changepassword:PasswordChangeReducer,
     dnd:DndReducers,
     createdForm:CreatedFormReducer,
     currentForm:CurrentFormReducer,
     deleteForm:DeleteFormReducer,
     respondToForm:RespondToFormReducer,
     getFromResponses:FromResponseReducers,


})


export default rootReducers