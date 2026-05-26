import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SubCategoryCard from "../components/SubCategoryCard";
import { getSubCategoriesByCategory } from "../services/categoryService";
import "./SubCategoriesPage.css";

function SubCategoriesPage() {
  const { categoryId } = useParams();

  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const data = await getSubCategoriesByCategory(categoryId);
        setSubCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [categoryId]);

  return (
    <div className="subcategories-page">
      <Navbar />

      <div className="subcategories-header">
        <h1>Choose a focused topic 🧠</h1>
        <p>Select a sub-category and start your AI learning session.</p>
      </div>

      {loading ? (
        <h2>Loading topics...</h2>
      ) : (
        <div className="subcategories-grid">
          {subCategories.map((subCategory) => (
            <SubCategoryCard
              key={subCategory._id}
              subCategory={subCategory}
              categoryId={categoryId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SubCategoriesPage;