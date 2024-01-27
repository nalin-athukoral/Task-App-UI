import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, removeTask } from '../features/tasks/taskSlice';
import AddtaskForm from '../components/AddTask';
import TodoModal from '../components/TaskModal';
import { toast } from 'react-toastify';

const Dashboard = () => {

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

    const tasks = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();

    const deleteTask = (index) => {
        dispatch(removeTask(index))
        toast.success('Task deleted successfully');
    } 

    return (
        <div className="App">
            <AddtaskForm />

            {
                tasks.map((task, index) => (
                    <div key={index}>
                        <h1>{task.title}</h1>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={ ()=> deleteTask(index)}>Delete</button>
                        <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleEditTodo(task.id, task.title)}>Edit</button>
                    </div>
                ),

                )

            }
            <TodoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveEdit}
                initialValue={selectedTodo ? selectedTodo.initialValue : ''}
            />
        </div>
    );
}

export default Dashboard;