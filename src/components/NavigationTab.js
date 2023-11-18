import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar bg-primary px-3">
      <Link
        to="/"
        class="navbar-brand"
        className="text-light"
        style={{ textDecoration: "none" }}
      >
        Task Manager
      </Link>
      <div class="nav">
        <Link
          to="/task-list"
          class="nav-link"
          className="text-light m-3"
          style={{ textDecoration: "none" }}
        >
          Tasks
        </Link>
        <Link
          to="/"
          class="nav-link"
          className="text-light m-3"
          style={{ textDecoration: "none" }}
        >
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
