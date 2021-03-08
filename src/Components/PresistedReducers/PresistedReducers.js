import rootReducers from "../RootReducer/RootReducer"
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    blacklist:["login","dnd","currentForm"]
  }
export const persistedReducer=persistReducer(persistConfig,rootReducers)

