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
        const { id, title } = action.payload;
        console.log(action.payload);
        const existingTask = state.tasks.find((task) => task.id === id);
        if (existingTask) {
          existingTask.title = title;
        }
    },

    prioritizeTask: (state, action) => {
        const { id, priority } = action.payload;
        console.log(action.payload);
        const existingTask = state.tasks.find((task) => task.id === id);
        if (existingTask) {
          existingTask.priority = priority;
        }
    },
},
});


export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;