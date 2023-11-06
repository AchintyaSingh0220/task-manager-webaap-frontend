import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/NavigationTab"
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList' ;
import LandingPage from './components/LandingPage' ;
import EditTask from './components/EditTask';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/create-task" element={<CreateTask/>}/>
          <Route path="/task-list" element={<TaskList/>}/>
          <Route path="/update-task/:id" element={<EditTask/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
