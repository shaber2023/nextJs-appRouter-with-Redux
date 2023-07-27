"use client"
import useAuthCheck from '@/hooks/userAuthCheck';
import { useDeleteStudentMutation,
          useGetStudentQuery } from '@/redux/services/student/studentapi'
import Link from 'next/link';


const page = () => {
  const {isLoading,isError,data} = useGetStudentQuery();
  const [deleteStudent]=useDeleteStudentMutation();

  const deleteData =async(id)=>{
    try {
      await deleteStudent(id);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2>this is home page</h2>
      {isLoading && <p>loading....</p>}
      {isError && <p>something wrong</p>}
      {data?.fulldata?.map((info)=>(
        <article key={info._id}>
          <p>{info.name}</p>
          <p>{info.email}</p>
          <button onClick={()=>deleteData(info._id)} disabled={isLoading}>delete student</button>
          <Link href={`/editStudent/${info._id}`}>
            Edit student
          </Link>
        </article>
      ))}
    </div>
  )
}

export default page