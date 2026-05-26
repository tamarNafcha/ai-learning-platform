import { useEffect, useState } from "react";
import { getAllCategories } from "../services/categoryService";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
import "./UserDashboardPage.css";

function UserDashboardPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-header">
        <div>
          <h1>What would you like to learn today? ✨</h1>

          <p>
            Choose a scientific field and start learning with AI.
          </p>
        </div>
      </div>

      {loading ? (
        <h2>Loading categories...</h2>
      ) : (
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default UserDashboardPage;