// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// // This slice is for fetching data from the server.Not completed yet
// const initialState = {
//     tasks: [],
//     isloading: false,
//     error: null,

// }

// export const fetchContent = createAsyncThunk(
//     'content/getchcontent',
//     async () => {
//         const res = await axios('http://localhost:5281/api/v1/task')
//         const data = await res.data.data
//         console.log(data);
//         return data
        
//     }

// )

// export const contentSlice = createSlice({
//     name: 'content',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchContent.pending, (state) => {
//             state.isLoading = true
//         })
//         builder.addCase(fetchContent.fulfilled, (state, action) => {
//             state.isLoading = false
//             state.tasks = action.payload
//         })
//         builder.addCase(fetchContent.rejected, (state, action) => {
//             state.isLoading = false
//             state.error = action.error.message
//         })
//     },
// })



// export default contentSlice.reducer