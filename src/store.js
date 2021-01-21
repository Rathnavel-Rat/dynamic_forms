import { applyMiddleware, createStore } from "redux";
import rootReducers from "./Components/RootReducer/RootReducer";
import  thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
//import { LoginRequestreducer } from "./Components/Redux/Register/reducers";

const store=createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk,logger)))
export default store