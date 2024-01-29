import { useAddItemMutation } from '../api/apiSlice'
import { useState } from 'react'

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('todo');

    const [addTask] = useAddItemMutation();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            addTask({ title, status });
            setTitle('');
            // setStatus('');
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='p-6'>
            <form onSubmit={submitData}>
                <input
                    className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-4 mr-4'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add New Task</button>
            </form>
        </div>

    )


}

export default AddPost;