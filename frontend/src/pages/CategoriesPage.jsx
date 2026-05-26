import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAllCategories } from "../services/categoryService";
import "./CategoriesPage.css";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <div className="categories-admin-page">
      <Navbar />

      <div className="categories-admin-header">
        <h1>Manage Categories 📚</h1>
        <p>View categories and manage their sub-categories.</p>

        <div className="categories-actions">
          <Link to="/admin/create-category" className="btn btn-primary">
            Create Category
          </Link>

          <Link to="/admin/create-subcategory" className="btn btn-light">
            Create Sub-Category
          </Link>
        </div>
      </div>

      <div className="categories-admin-grid">
        {categories.map((category) => (
          <div className="category-admin-card card" key={category._id}>
            <div className="category-admin-icon">📘</div>

            <h3>{category.name}</h3>

            <p>Manage topics under this learning field.</p>

            <div className="category-card-actions">
              <Link
                to={`/categories/${category._id}`}
                className="small-link-btn"
              >
                View Sub-Categories
              </Link>

              <Link
                to="/admin/create-subcategory"
                className="small-link-btn light"
              >
                Add Sub-Category
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;