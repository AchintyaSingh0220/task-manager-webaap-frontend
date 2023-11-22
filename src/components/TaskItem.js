import { Link } from "react-router-dom";
import Axios from "axios";
import "../styles/TaskItem.css";
import MarkButton from "./MarkButton";
function TaskItem(props) {
  const date = new Date(props.obj.date);
  const handleClick = () => {
    Axios.delete("https://taskmanager-webaap-backend.onrender.com/delete-task/" + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Task removed from agenda");
        }
      })
      .catch((err) => alert(err));
  };
  const toggleMarked = () => {
    if (props.obj.marked === false) props.obj.marked = true;
    else props.obj.marked = false;

    Axios.put("https://taskmanager-webaap-backend.onrender.com/update-task/" + props.obj._id, props.obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Task status updated");
        } else {
          Promise.reject();
        }
      })
      .catch((res) => alert(res));
  };
  const values = ["High", "Medium", "Low"];
  return (
    <div id="ti1" className={props.obj.marked === true ? "dull" : ""}>
      <div id="ti2">
        <div id="ti8">
          <h4 className="text-warning p-4">
            &nbsp;&nbsp;&nbsp;&nbsp;{props.obj.taskName}
          </h4>
        </div>
        <div id="ti9">
          Due : {date.toLocaleDateString("en-US")}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Priority : {values[props.obj.priority]}
        </div>
      </div>

      <div id="ti3">
        <button id="ti7">
          <Link id="ti4" to={"/update-task/" + props.obj._id}>
            Edit Task
          </Link>
        </button>
        <button id="ti5" onClick={toggleMarked}>
          <MarkButton marked={props.obj.marked} />
        </button>
        <button id="ti6" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;