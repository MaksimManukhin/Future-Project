
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  cartReducer from "./reducer.js";
import gamesReducer from "../book/reducer"

import filterSlice from "../searching/category.tsx";
import bookSlice from "../searching/bookSlice.tsx";
import userSlice from "../book/full"
import storage from "redux-persist/lib/storage";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


  const persistConfig = {
    key:`root`,
    storage
};


const rootReducer = combineReducers({
    cart:cartReducer,
    book: gamesReducer,
    filter:filterSlice,
    boom:bookSlice,
    user:userSlice,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)





export const store = configureStore({
   reducer:persistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
    }),
})

export const persistor = persistStore(store);





