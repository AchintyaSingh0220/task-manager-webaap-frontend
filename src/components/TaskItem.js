import { Link } from "react-router-dom";
import Axios from "axios";
import "./item.css";
import logo from "./spanner.jpeg";
function TaskItem(props) {
  const date = new Date(props.obj.date);
  const check1 = props.obj.priority;
  const priorityText = {
    0: "High ",
    1: "Medium ",
    2: "Low ",
  };
  const handleClick = () => {
    Axios.delete("http://localhost:4000/delete-task/" + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Task removed from agenda");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="a1" style={{ padding: "20px" }}>
      {/* <img src={logo} style={{ padding: "20px" }} /> */}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {props.obj.taskName}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {date.toLocaleDateString("en-US")}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {priorityText[check1]}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-info">
        <Link
          to={"/update-task/" + props.obj._id}
          style={{ textDecoration: "none" }}
          className="bg-info text-light"
        >
          Edit
        </Link>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-success" onClick={handleClick}>
        Completed
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
