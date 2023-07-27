"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCreateStudentMutation } from '@/redux/services/student/studentapi'

const page = () => {
  const router = useRouter()
    const [addStudent,{isLoading}]=useCreateStudentMutation();

    const[student,setStudent]=useState({name:'',email:'',home:'',taka:''});
    const chang=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const click=async(e)=>{
        try {
        e.preventDefault();
        await addStudent(student)
        router.push('/')
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <div>

        <h1>this is add student page</h1>
        <p>name</p>
        <input type="text" name='name' value={student.name} onChange={chang}/>
        <p>email</p>
        <input type="email" name='email' value={student.email} onChange={chang}/>
        <p>home</p>
        <input type="text" name='home' value={student.home} onChange={chang}/>
        <p>taka</p>
        <input type="number" name='taka' value={student.taka} onChange={chang}/>
        <br/>
        <button onClick={click} disabled={isLoading}>add user</button>
    </div>
  )
}

export default page