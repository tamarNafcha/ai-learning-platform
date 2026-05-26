import Navbar from "../components/Navbar";
import AdminCard from "../components/AdminCard";
import "./AdminDashboardPage.css";

function AdminDashboardPage() {
  return (
    <div className="admin-page">
      <Navbar />

      <div className="admin-header">
        <h1>Admin Dashboard ⚙️</h1>
        <p>Manage users, prompts, categories, and learning topics.</p>
      </div>

      <div className="admin-grid">
        <AdminCard
          icon="👥"
          title="All Users"
          description="View all registered users in the platform."
          to="/admin/users"
        />

        <AdminCard
          icon="💬"
          title="All Prompts"
          description="Review users’ questions and AI-generated lessons."
          to="/admin/prompts"
        />

        <AdminCard
          icon="📚"
          title="Categories"
          description="Manage learning categories and sub-categories."
          to="/admin/categories"
        />

        <AdminCard
          icon="➕"
          title="Create Category"
          description="Add a new scientific learning field."
          to="/admin/create-category"
        />

        <AdminCard
          icon="🎯"
          title="Create Sub-Category"
          description="Add a focused topic under an existing category."
          to="/admin/create-subcategory"
        />
      </div>
    </div>
  );
}

export default AdminDashboardPage;