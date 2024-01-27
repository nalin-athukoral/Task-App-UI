import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContent } from "../features/tasks/apitaskSlice";

const TestPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContent())

    }, [dispatch]);

    const contents = useSelector((state) => state.apiTask.tasks)
    const isLoading = useSelector((state) => state.apiTask.isLoading)
    const error = useSelector((state) => state.apiTask.error)

    if (isLoading) {
        return 'loading...'
    }

    if (error) {
        return error
    }
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md bg-white p-8 shadow-md rounded-md mx-4 sm:mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Task Titles</h1>
                <ul>
                    {contents.map((task) => (
                        <li key={task.id} className="text-lg mb-2">
                            {task.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TestPage;