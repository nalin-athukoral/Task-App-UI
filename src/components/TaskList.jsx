import AddTaskForm from "./AddTask";
import TaskItem from "./TaskItem";
import TodoModal from "./TaskModal";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../features/tasks/taskSlice';

const TaskList = ({ todos }) => {

    const handleEditTodo = (id, initialValue) => {
        setSelectedTodo({ id, initialValue });
        setIsModalOpen(true);
    };

    const handleSaveEdit = (title) => {
        dispatch(editTask({ id: selectedTodo.id, title }));
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    // const tasks = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();

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
                    {todos.map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={() => handleEditTodo(todo.id, todo.title)} />
                    ))

                    }
                    <TodoModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onSave={handleSaveEdit}
                        initialValue={selectedTodo ? selectedTodo.initialValue : ''}
                    />
                </div>
                <div className="md:w-1/3 mb-8 mr-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-4">In Progress</h2>
                    {todos.map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={() => handleEditTodo(todo.id, todo.title)} />
                    ))

                    }
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-lg font-bold mb-4">Done</h2>
                    {todos.map((todo, index) => (
                        <TaskItem key={index} title={todo.title} deleteButton={() => deleteTask(index)} editButton={()=> handleEditTodo(todo.id, todo.title)} />
                    ))

                    }
                </div>

            </div>
        </>
    );
}

export default TaskList;