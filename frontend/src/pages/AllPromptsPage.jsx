import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import { getAllPrompts } from "../services/adminService";
import "./AllPromptsPage.css";

function AllPromptsPage() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const loadPrompts = async () => {
      const data = await getAllPrompts();
      setPrompts(data);
    };

    loadPrompts();
  }, []);

  return (
    <div className="prompts-admin-page">
      <Navbar />

      <div className="prompts-admin-header">
        <h1>All Prompts 💬</h1>
        <p>Review users’ questions and AI-generated lessons.</p>
      </div>

      <div className="prompts-admin-grid">
        {prompts.map((item) => (
          <div className="prompt-admin-card card" key={item._id}>
            <div className="prompt-meta">
              <span>{item.user?.name || "Unknown user"}</span>
              <span>{item.category?.name}</span>
              <span>{item.subCategory?.name}</span>
            </div>

            <h3>{item.prompt}</h3>

            <div className="prompt-response">
              <ReactMarkdown>{item.response}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPromptsPage;