import { rootapi } from "../api/rootapi";
import { userLoggedIn } from "./authSlice";

export const authapi = rootapi.injectEndpoints({
    endpoints:(builder)=>({
        signUp:builder.mutation({
            query:(data)=>({
                url:'api/registration',
                method:'POST',
                body:data
            })
        }),
        signIn:builder.mutation({
            query:(data)=>({
                url:'api/login',
                method:'POST',
                body:data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                   localStorage.setItem('auth',JSON.stringify({
                    accessToken:result.data.token,
                    user:result.data.user
                   })),
                   dispatch(userLoggedIn({
                    accessToken:result.data.token,
                    user:result.data.user
                   }))
                } catch (error) {
                    console.log('this is your error',error)
                }
            }
        })
    })
})

export const {useSignUpMutation,useSignInMutation} = authapi