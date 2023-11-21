import { useEffect, useState } from "react";
import Axios from "axios";

function Reminder(props)
{
    const [count, setCount] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:4000/due-tasks/" + props.userId)
        .then((res) => {
            if(res.status === 200) setCount(res.data.length);
            else Promise.reject();
        })
        .catch((err) => alert(err));
    });
    return (
        <div className="reminder_notification">
            There {count === 1 ? "is" : "are"} {count === 0 ? "Zero" : count.toString()} {count === 1 ? "task" : "tasks"} pending today
        </div>
    )

}

export default Reminder;