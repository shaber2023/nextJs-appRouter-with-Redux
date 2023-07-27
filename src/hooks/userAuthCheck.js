"use client"
import { userLoggedIn } from "@/redux/services/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.accessToken && auth?.user) {
                dispatch(userLoggedIn({
                    accessToken:auth.accessToken,
                    user:auth.user
                   }))
            }
        }
        setTimeout(()=>{
            setAuthChecked(true);
        },3000)
        
    }, [dispatch, setAuthChecked]);

    return authChecked;
}
