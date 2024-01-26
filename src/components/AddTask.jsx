import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice'
import { toast } from 'react-toastify';

const AddTaskForm = () => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskTitle.trim() === '') {
            // Prevent adding an empty task
            return;
        }
        const newTask = {
            id: tasks.length + 1,
            title: newTaskTitle,
            // other properties...
        };

        dispatch(addTask(newTask));
        setNewTaskTitle('');
        toast.success('Task added successfully');
    };



    return (
        <div className='p-6'>
            <form onSubmit={handleAddTask}>
                <input
                    className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none m-4'
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)} />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add New Task</button>
            </form>
        </div>

    );

}

export default AddTaskForm;