import { useAddItemMutation } from '../api/apiSlice'
import { useState } from 'react'

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [addTask] = useAddItemMutation();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            addTask({ title, body });
            setTitle('');
            setBody('');
        } catch (error) {
            console.log(error);

        }

    }



    return (
        <div>
            <form onSubmit={submitData}>
                <input type="text" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="body" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPost;