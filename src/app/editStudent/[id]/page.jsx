"use client"
import React, { useState,useEffect } from 'react'
import { useParams} from 'next/navigation'
import { useGetOneStudentQuery, useUpdateStudentMutation } from '@/redux/services/student/studentapi';
const page = () => {
  const [editVideo] = useUpdateStudentMutation();
  const {id} = useParams();

  const {data,isLoading,isError} = useGetOneStudentQuery(id);
  
  const[student,setStudent]=useState({name:'',email:'',home:'',taka:''});
  
  useEffect(() => {
    if (data) {
      setStudent({name:data.singaldata.name,email:data.singaldata.email,home:data.singaldata.home,taka:data.singaldata.taka,})
    } else {
      setStudent({ name: '', email: '',home:'',taka:'' });
    }
  }, [data]);

  const chang=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
  }
  const addEdit=async(e)=>{
    e.preventDefault();
    try {
    const res = await editVideo({id,student})
    console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
       <h2>this is edit page</h2>
       {isLoading && <h2>loading....</h2>}
       {isError && <h2>something wro</h2>}
       <p>name</p>
        <input type="text" name='name' value={student.name} onChange={chang}/>
        <p>email</p>
        <input type="email" name='email' value={student.email} onChange={chang}/>
        <p>home</p>
        <input type="text" name='home' value={student.home} onChange={chang}/>
        <p>taka</p>
        <input type="number" name='taka' value={student.taka} onChange={chang}/>
        <br />
        <button onClick={addEdit}>add Edit</button>
    </div>
  )
}

export default page