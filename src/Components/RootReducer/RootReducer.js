import { combineReducers } from "redux";
import LoginRequestReducers from "../Redux/Login/reducers";
import { PasswordChangeReducer } from "../Redux/passwordChange/reducers";
import RegisterRequestReducer from "../Redux/Register/reducers";
import { userDetailReducer } from "../Redux/UserDetails/UserDetails";

 const rootReducers =combineReducers({
     register:RegisterRequestReducer,
     login:LoginRequestReducers,
     userdetails:userDetailReducer,
     changepassword:PasswordChangeReducer,

})

export default rootReducers