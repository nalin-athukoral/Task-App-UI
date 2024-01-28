
import TaskList from "../components/TaskList";
import { useSelector, useDispatch} from 'react-redux'

// dashboard componet to display the task list on the dashboard page   
const Dashboard = () => {
    const tasks = useSelector(state => state.task.tasks);
    // const dispatch = useDispatch();

    const todos = [
        { id: 1, title: 'Task 1', status: 'Todo' },
    ];
    return(
        <TaskList todos={tasks}/>
    )

}

export default Dashboard;