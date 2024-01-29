import { useDeleteItemMutation, useEditItemMutation } from '../api/apiSlice'
import { useGetTasksQuery } from '../api/apiSlice'
import AddPost from '../components/AddPost';
import { TodoModal } from '../components';
import { useState } from 'react';
import { TaskItem } from '../components/index';

//I use this page to test the functionalities and then i move the code to the actual page where i want to use it.
const TestPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);


    const { data: taskData, error, isLoading, isError } = useGetTasksQuery();
    console.log(taskData);

    const [deleteTask] = useDeleteItemMutation();
    const [editTask] = useEditItemMutation();

    const handleEditTodo = (taskId, initialValue, status) => {
        setSelectedTodo({taskId, initialValue, status});
        setIsModalOpen(true);
    };


    const handleSaveEdit = async (title, status) => {
        if (title === '') {
            // Prevent adding an empty task
            title = selectedTodo.initialValue;
            // dispatch(editTask({ id: selectedTodo.id, title, status }));
            try {
                editTask({ id: selectedTodo.taskId, data: { title, status } });
            } catch (error) {
                console.log(error);
            }
        }
        else {
            // dispatch(editTask({ id: selectedTodo.id, title, status }));
            try {
                editTask({ id: selectedTodo.taskId, data: { title, status } });
            } catch (error) {
                console.log(error);
            }
        }
        // editTask({ id, title, status });
        // dispatch(statusChange({ id: selectedTodo.id, status }));
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const deleteData = async (id) => {
        try {
            deleteTask(id);
        } catch (error) {
            console.log(error);
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error}</div>
    }

    return (
        <>
            <AddPost />
            {
                // taskData.map((task) => (
                //     <div key={task.taskId}>
                //         <h1 className='bg-slate-300'>{task.title}</h1>
                //         <p className='bg-yellow-100'>{task.status}</p>
                //         <button className='bg-red-500' onClick={() => deleteData(task.taskId)}>Delete</button>
                //         <button className='bg-blue-200' onClick={() => handleEditTodo(task.taskId, task.title, task.status)}>Edit</button>
                //         {/* <button className='bg-red-500' onClick={()=> editData(task.taskId)}>Delete</button> */}
                //     </div>
                // ))
            }
            <div className="flex flex-col md:flex-row p-8">
                <div className="md:w-1/3 mb-8 mr-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-4 ">Todo</h2>


                    {taskData.filter(todo => (todo.status === 'todo' || todo.status === '')).map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteData(todo.taskId)} editButton={() => handleEditTodo(todo.taskId, todo.title, todo.status)} />
                    ))

                    }
                </div>
                <div className="md:w-1/3 mb-8 mr-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-4">In Progress</h2>
                    {taskData.filter(todo => todo.status === 'progress').map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteData(todo.taskId)} editButton={() => handleEditTodo(todo.taskId, todo.title)} />
                    ))

                    }
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-lg font-bold mb-4">Done</h2>
                    {taskData.filter(todo => todo.status === 'done').map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteData(todo.taskId)} editButton={() => handleEditTodo(todo.taskId, todo.title)} />
                    ))

                    }
                </div>

            </div>
            <TodoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                status={selectedTodo ? selectedTodo.status : ''}
                onSave={handleSaveEdit}
                initialValue={selectedTodo ? selectedTodo.initialValue : ''}
            />

        </>
    )
}

export default TestPage;