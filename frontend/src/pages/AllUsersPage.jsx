import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllUsers } from "../services/adminService";
import "./AdminTables.css";

function AllUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return (
    <div className="admin-list-page">
      <Navbar />

      <div className="admin-list-header">
        <h1>All Users 👥</h1>
        <p>View all registered users in the platform.</p>
      </div>

      <div className="table-card card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsersPage;