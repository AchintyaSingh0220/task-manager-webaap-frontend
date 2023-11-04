import {Link} from "react-router-dom";

function Nav()
{
    return(
        <nav class="navbar bg-warning px-3">
            <Link to="/" class="navbar-brand">Task Manager</Link>
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                
                {/* we'll add create-task, update-task and delete-task buttons in this single page */}
                <Link to="/task-list" class="nav-link">Tasks</Link>
            </div>
        </nav>
    );
}

export default Nav;