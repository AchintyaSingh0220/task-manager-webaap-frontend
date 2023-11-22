import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import Axios from "axios";
import {Link} from "react-router-dom"
import "../styles/TaskList.css";
import Reminder from "./Reminder";
function TaskList(props)
{
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://taskmanager-webaap-backend.onrender.com/tasks/" + props.userId)
        .then((res) => {
            if(res.status === 200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err) => alert(err));
    });
    const ListTasks = () => {
        return(
            arr.map((val, ind) => {
                return (
                    <TaskItem obj={val}/>
                )
            })
        );
    };
    return(
        <div>
            <Reminder userId={props.userId}/>
            <div class = "task-list-container">
                <div id = "create-task-container">
                    <Link to="/create-task"> 
                        <button id = "create-task-button">NEW TASK</button>
                    </Link>
                </div>
                <div>
                    {ListTasks()}
                </div>
            </div>
        </div>


    );
}

export default TaskList;