import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createCategory } from "../services/categoryService";
import "./AdminFormPage.css";

function CreateCategoryPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCategory({ name });
      setMessage("Category created successfully!");
      setName("");

      setTimeout(() => {
        navigate("/admin/categories");
      }, 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to create category");
    }
  };

  return (
    <div className="admin-form-page">
      <Navbar />

      <div className="admin-form-header">
        <h1>Create Category ➕</h1>
        <p>Add a new scientific learning field.</p>
      </div>

      <form className="admin-form-card card" onSubmit={handleSubmit}>
        <label>Category Name</label>

        <input
          type="text"
          placeholder="Example: Computer Science"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button className="btn btn-primary">Create Category</button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default CreateCategoryPage;