import { rootapi } from "../api/rootapi";

const studentApi = rootapi.injectEndpoints({
    endpoints:(builder)=>({
        getStudent:builder.query({
            query:()=>({
                url:'api',
                method:'GET'
            }),
            providesTags:['student']
        }),
        getOneStudent:builder.query({
            query:(id)=>({
                url:`api/${id}`,
                method:'GET'
            }),
        }),
        createStudent:builder.mutation({
            query:(data)=>({
                url:'api',
                method:'POST',
                body:data
            }),
            invalidatesTags:['student']
        }),
        updateStudent:builder.mutation({
            query:({id,student})=>({
                url:`api/${id}`,
                method:'PATCH',
                body:student
            }),
            invalidatesTags:['student']
        }),
        deleteStudent:builder.mutation({
            query:(id)=>({
                url:`api/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['student']
        })
    })
})

export const {useGetStudentQuery,useCreateStudentMutation,
            useDeleteStudentMutation,useGetOneStudentQuery,useUpdateStudentMutation} = studentApi
