import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import { createPrompt } from "../services/promptService";
import { getAllCategories, getSubCategoriesByCategory } from "../services/categoryService";
import "./PromptLessonPage.css";

function PromptLessonPage() {
  const { categoryId, subCategoryId } = useParams();

  const [prompt, setPrompt] = useState("");
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  useEffect(() => {
    const loadSelectedTopic = async () => {
      try {
        const categories = await getAllCategories();
        const selectedCategory = categories.find((cat) => cat._id === categoryId);
        setCategoryName(selectedCategory?.name || "Selected Category");

        const subCategories = await getSubCategoriesByCategory(categoryId);
        const selectedSubCategory = subCategories.find((sub) => sub._id === subCategoryId);
        setSubCategoryName(selectedSubCategory?.name || "Selected Topic");
      } catch (error) {
        console.log(error);
      }
    };

    loadSelectedTopic();
  }, [categoryId, subCategoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setLoading(true);
    setLesson("");

    try {
      const data = await createPrompt({
        categoryId,
        subCategoryId,
        prompt,
      });

      setLesson(data.response || data.prompt?.response || data.data?.response);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to generate lesson");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prompt-page">
      <Navbar />

      <div className="prompt-topic-badge">
        <span>{categoryName}</span>
        <span className="topic-divider">→</span>
        <span>{subCategoryName}</span>
      </div>

      <div className="prompt-header">
        <h1>What would you like to learn? ✨</h1>

        <p>
          Ask a focused question and receive a short, clear AI mini-lesson.
        </p>
      </div>

      <form className="prompt-form card" onSubmit={handleSubmit}>
        <textarea
          placeholder="Example: Explain how React state works"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Generating lesson..." : "Generate Lesson"}
        </button>
      </form>

      {lesson && <LessonCard lesson={lesson} />}
    </div>
  );
}

export default PromptLessonPage;