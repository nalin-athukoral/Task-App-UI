import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { data } from 'autoprefixer'

export const apiSlice = createApi({

  reducerPath: 'taskapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5281/api/v1',
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/task', providesTags: ['Task']
    }),

    addItem: builder.mutation({
      query: (body) => ({
        url: '/task',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),

    // editItem: builder.mutation({
    //   query: ({id, ...body}) => ({
    //     url: `/task/${id}`,
    //     method: 'PUT',
    //     body:data,
    //   }),
    //   invalidatesTags: ['Task'],
    // }),

    editItem: builder.mutation({
      query: ({id,data}) => ({
        url: `/task/${id}`,
        method: 'PUT',
        body:data,
      }),
      invalidatesTags: ['Task'],
    }),
    

  }),



})
export const { useGetTasksQuery, useAddItemMutation, useDeleteItemMutation, useEditItemMutation } = apiSlice