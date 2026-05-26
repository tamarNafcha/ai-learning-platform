import ReactMarkdown from "react-markdown";
import "./LessonCard.css";

function LessonCard({ lesson }) {
  return (
    <div className="lesson-card card">
      <h2>AI Lesson ✨</h2>

      <div className="lesson-content">
        <ReactMarkdown>
          {lesson}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default LessonCard;