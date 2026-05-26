import { Link } from "react-router-dom";
import "./AdminCard.css";

function AdminCard({ title, description, icon, to }) {
  return (
    <Link to={to} className="admin-card card">
      <div className="admin-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default AdminCard;