"use client"
import { useRouter } from 'next/navigation'
import { useSignInMutation } from '@/redux/services/auth/authapi'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const router = useRouter()
    const [signIn,{isLoading,isSuccess}]=useSignInMutation();
    const[user,setUser]=useState({email:'',password:''})

    const chang=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
  const click=async(e)=>{
    e.preventDefault;
    try {
      await signIn(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <h2>this is login page</h2>
        <p>email</p>
        <input type="email" value={user.email} name='email' onChange={chang}/>
        <p>password</p>
        <input type="password" value={user.password} name='password' onChange={chang} />
        <br />
        <button onClick={click} disabled={isLoading}>Login</button>
        <p> Don’t have account?<Link href='/registration'>Sign up</Link></p>
    </div>
  )
}

export default page

