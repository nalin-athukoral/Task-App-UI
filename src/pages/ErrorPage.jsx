
import TaskList from "../components/TaskList";
import { useSelector, useDispatch} from 'react-redux'

const ErrorPage = () => {
    const tasks = useSelector(state => state.task.tasks);
    // const dispatch = useDispatch();

    const todos = [
        { id: 1, title: 'Task 1', status: 'Todo' },
    ];
    return(
        <TaskList todos={tasks}/>
    )

}

export default ErrorPage;