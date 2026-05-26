import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createSubCategory, getAllCategories } from "../services/categoryService";
import "./AdminFormPage.css";

function CreateSubCategoryPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSubCategory({
        name,
        categoryId,
      });

      setMessage("Sub-category created successfully!");
      setName("");
      setCategoryId("");

      setTimeout(() => {
        navigate("/admin/categories");
      }, 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to create sub-category");
    }
  };

  return (
    <div className="admin-form-page">
      <Navbar />

      <div className="admin-form-header">
        <h1>Create Sub-Category 🎯</h1>
        <p>Add a focused topic under an existing category.</p>
      </div>

      <form className="admin-form-card card" onSubmit={handleSubmit}>
        <label>Choose Category</label>

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select category</option>

          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <label>Sub-Category Name</label>

        <input
          type="text"
          placeholder="Example: React"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button className="btn btn-primary">
          Create Sub-Category
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default CreateSubCategoryPage;