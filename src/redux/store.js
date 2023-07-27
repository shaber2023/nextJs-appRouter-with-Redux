import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { rootapi } from "./services/api/rootapi";
import authSlice from "./services/auth/authSlice";


export const store = configureStore({
    reducer:{
        [rootapi.reducerPath]:rootapi.reducer,
        auth:authSlice
    },
    middleware:(myMiddleware)=>
     myMiddleware().concat(rootapi.middleware)
    
})

setupListeners(store.dispatch)