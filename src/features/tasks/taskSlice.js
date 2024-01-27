import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[],

};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task, index) => index !== action.payload
            );
        },

      editTask: (state, action) => {
        const { id, title, status} = action.payload;
        console.log(action.payload);
        const existingTask = state.tasks.find((task) => task.id === id);
        if (existingTask) {
          existingTask.title = title;
          existingTask.status = status;
        }
    },

    statusChange: (state, action) => {
        const { id, status } = action.payload;
        console.log(action.payload);
        const existingTask = state.tasks.find((task) => task.id === id);
        if (existingTask) {
          existingTask.status = status;
        }
    },
},
});


export const { addTask, removeTask, editTask, statusChange } = taskSlice.actions;
export default taskSlice.reducer;