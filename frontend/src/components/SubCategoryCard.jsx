import { Link } from "react-router-dom";
import "./SubCategoryCard.css";

function SubCategoryCard({ subCategory, categoryId }) {
  return (
    <Link
      to={`/lesson/${categoryId}/${subCategory._id}`}
      className="subcategory-card card"
    >
      <div className="subcategory-icon">🎯</div>

      <h3>{subCategory.name}</h3>

      <p>
        Start a focused AI lesson about this topic.
      </p>
    </Link>
  );
}

export default SubCategoryCard;