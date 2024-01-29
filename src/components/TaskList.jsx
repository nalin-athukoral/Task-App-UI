import AddTaskForm from "./AddTask";
import TaskItem from "./TaskItem";
import TodoModal from "./TaskModal";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../features/tasks/taskSlice';

const TaskList = ({ todos }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const dispatch = useDispatch();

    const handleEditTodo = (id, initialValue, status) => {
        console.log(`inital value ${id, initialValue, status}`);
        setSelectedTodo({ id, initialValue, status });

        setIsModalOpen(true);
    };

    const handleSaveEdit = (title, status) => {
        if (title === '') {
            // Prevent adding an empty task
            title = selectedTodo.initialValue;
            // status = selectedTodo.status;
            dispatch(editTask({ id: selectedTodo.id, title, status }));
        }
        else{
            dispatch(editTask({ id: selectedTodo.id, title, status }));
        }

        // dispatch(statusChange({ id: selectedTodo.id, status }));
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // const tasks = useSelector(state => state.task.tasks);



    const deleteTask = (index) => {
        dispatch(removeTask(index))
        toast.success('Task deleted successfully');
    }

    return (
        <>

            <AddTaskForm />
            <div className="flex flex-col md:flex-row p-8">
                <div className="md:w-1/3 mb-8 mr-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-4 ">Todo</h2>


                    {todos.filter(todo => (todo.status === 'todo' || todo.status === '')).map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={() => handleEditTodo(todo.id, todo.title, todo.status)} />
                    ))

                    }
                    <TodoModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        status={selectedTodo ? selectedTodo.status : ''}
                        onSave={handleSaveEdit}
                        initialValue={selectedTodo ? selectedTodo.initialValue : ''}
                    />
                </div>
                <div className="md:w-1/3 mb-8 mr-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-4">In Progress</h2>
                    {todos.filter(todo => todo.status === 'progress').map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={() => handleEditTodo(todo.id, todo.title)} />
                    ))

                    }
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-lg font-bold mb-4">Done</h2>
                    {todos.filter(todo => todo.status === 'done').map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={() => handleEditTodo(todo.id, todo.title)} />
                    ))

                    }
                </div>

            </div>
        </>
    );
}

export default TaskList;