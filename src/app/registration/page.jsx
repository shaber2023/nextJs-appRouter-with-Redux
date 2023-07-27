"use client"
import { useSignUpMutation } from '@/redux/services/auth/authapi'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const[signUp,{isLoading,isSuccess}]=useSignUpMutation();

  const[user,setUser]=useState({name:'',email:'',phone:'',password:''})

  const chang=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
const click=async()=>{
  try {
  await signUp(user)
  if(isSuccess){
    router.push('/login')
  }
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
        <h2>this is registration page</h2>
        <p>name</p>
        <input type="text" value={user.name} required name='name' onChange={chang}/>
        <p>email</p>
        <input type="email" value={user.email} required name='email' onChange={chang}/>
        <p>phone</p>
        <input type="number" value={user.phone} required name='phone' onChange={chang}/>
        <p>password</p>
        <input type="text" value={user.password} required name='password' onChange={chang}/>
        <br />
        <button onClick={click} disabled={isLoading}>sign up</button>
        <p>Already have account?<Link href='/login'>Sign in</Link></p>
    </div>
  )
}

export default page