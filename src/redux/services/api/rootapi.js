
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const rootapi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/',
    prepareHeaders:async(headers,{getState})=>{
    const token = getState();
    if (token) {
            headers.set('authorization', `Bearer ${token.auth.accessToken}`);
            }
        return headers;
    }
}),
    endpoints:(builder)=>({}),
    tagTypes:['student']
})

// Bearer ${token}