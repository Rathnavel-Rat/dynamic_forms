import rootReducers from "../RootReducer/RootReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    blacklist:["login"]
  }
export const persistedReducer=persistReducer(persistConfig,rootReducers)

