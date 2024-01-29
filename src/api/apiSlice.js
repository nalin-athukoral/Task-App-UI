import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'task',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5281',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/tasks',
    }),
  }),
})
export const { useGetPostsQuery } = apiSlice