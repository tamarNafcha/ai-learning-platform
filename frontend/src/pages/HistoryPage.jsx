import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "./HistoryPage.css";
import ReactMarkdown from "react-markdown";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get("/prompts/my-history");
        setHistory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">

      <Navbar />

      <div className="history-header">
        <h1>Your Learning History 📚</h1>

        <p>
          Revisit your previous AI lessons anytime.
        </p>
      </div>

      {loading ? (
        <h2>Loading history...</h2>
      ) : history.length === 0 ? (
        <div className="empty-history card">
          <h2>No lessons yet</h2>
          <p>Start learning and your AI lessons will appear here.</p>
        </div>
      ) : (
        <div className="history-grid">

          {history.map((item) => (
            <div className="history-card card" key={item._id}>

              <div className="history-topic">
                <span>{item.category?.name}</span>
                <span>→</span>
                <span>{item.subCategory?.name}</span>
              </div>

              <h3>{item.prompt}</h3>

              <div className="history-response">
                <ReactMarkdown>{item.response}</ReactMarkdown>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default HistoryPage;