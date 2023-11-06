// import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Nav from "./components/NavigationTab";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import UpdateTask from "./components/UpdateTask";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/update-task/:id" element={<UpdateTask />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
