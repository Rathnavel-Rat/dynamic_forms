import { applyMiddleware, createStore } from "redux";
import rootReducers from "./Components/RootReducer/RootReducer";
import  thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import {persistedReducer} from './Components/PresistedReducers/PresistedReducers'
import { persistStore } from 'redux-persist'

export const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk,logger)))
export  const persistor = persistStore(store)
