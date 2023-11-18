import { useEffect, useState } from "react";
import "./taskf.css";

function TaskForm(props) {
  const [taskName, setTaskName] = useState(props.taskNameValue);
  const [date, setDate] = useState(props.dateValue);
  const [priority, setPriority] = useState(props.priorityValue);
  const [reminderBool, setReminderBool] = useState(props.reminderValue);

  useEffect(() => {
    setTaskName(props.taskNameValue);
    setDate(props.dateValue);
    setPriority(props.priorityValue);
    setReminderBool(props.reminderValue);
  }, [
    props.taskNameValue,
    props.dateValue,
    props.priorityValue,
    props.reminderValue,
  ]);

  function handleClick() {
    props.getState([taskName, date, priority, reminderBool]);
  }
  return (
    <div
      style={{
        borderColor: "white",
        borderStyle: "double",
        padding: "20px",
        margin: "25px",
      }}
      class="aa1"
    >
      <div style={{ maxWidth: "40%", margin: "0 auto" }}>
        <input
          value={taskName}
          class="form-control my-3"
          onChange={(event) => setTaskName(event.target.value)}
          placeholder="Task/Event name"
        />
        <input
          type="date"
          defaultValue={date}
          class="form-control my-3"
          onChange={(event) => setDate(event.target.value)}
        />
        <label className="mt-3">Priority:</label>
        <select
          onChange={(event) => setPriority(event.target.value)}
          value={priority}
          className="m-3"
        >
          <option value={0}>High</option>
          <option value={1}>Medium</option>
          <option value={2}>Low</option>
        </select>
        <br />
        <label className="mt-3">Set Reminder:</label>
        <select
          value={reminderBool}
          onChange={(event) => setReminderBool(event.target.value)}
          className="m-3"
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <button
          class="btn btn-success my-3 d-block mx-auto"
          onClick={handleClick}
          type="submit"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
