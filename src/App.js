import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/NavigationTab"
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList' ;
import EditTask from './components/EditTask';
import ShowNavBar from './components/ShowNavBar';
import LogIn from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <ShowNavBar>
          <Nav />
        </ShowNavBar>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/create-task" element={<CreateTask/>}/>
          <Route path="/task-list" element={<TaskList/>}/>
          <Route path="/update-task/:id" element={<EditTask/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
