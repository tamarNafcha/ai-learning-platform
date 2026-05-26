import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        SciMentor AI ✨
      </Link>

      <div className="navbar-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/history">
          History
        </Link>

        {user?.role === "admin" && (
          <Link to="/admin">
            Admin
          </Link>
        )}

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;