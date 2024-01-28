// This component is responsible for displaying a single task item. 
const TaskItem = ({ title, deleteButton, editButton }) => {
    return (
        <div className="bg-orange-300 p-4 rounded shadow mb-4 ">
           
            <p className="text-lg font-semibold ">{title}</p>
            
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-' onClick={deleteButton}>Delete</button>
            <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-4' onClick={editButton}>Edit Task</button>
        </div>
    );
};

export default TaskItem;