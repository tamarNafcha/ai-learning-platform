import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category._id}`}
      className="category-card card"
    >
      <div className="category-icon">📚</div>

      <h3>{category.name}</h3>

      <p>
        Explore focused AI lessons in this scientific field.
      </p>
    </Link>
  );
}

export default CategoryCard;