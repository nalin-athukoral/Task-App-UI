import { data } from 'autoprefixer';
import { useGetTasksQuery } from '../api/apiSlice'
import AddPost from './AddPost';

//I use this page to test the functionalities and then i move the code to the actual page where i want to use it.
const TestPage = () => {

    const { data: taskData, error, isLoading, isError } = useGetTasksQuery();
    console.log(taskData);

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
                taskData.map((task) => (
                    <div key={task.id}>
                        <h1 className='bg-slate-300'>{task.title}</h1>
                        <p className='bg-gray-700'>{task.body}</p>
                    </div>
                ))
            }

        </>
    )
}

export default TestPage;