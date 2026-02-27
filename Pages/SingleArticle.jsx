import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleArticleCard from "../src/components/SingleArticleCard";
import CommentList from "../src/components/Commentlist";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentError, setCommentError] = useState(null);

  const currentUser = "jessjelly";

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      axios.get(
        `https://nc-news-app-axmd.onrender.com/api/articles/${article_id}`,
      ),
      axios.get(
        `https://nc-news-app-axmd.onrender.com/api/articles/${article_id}/comments`,
      ),
    ])
      .then(([articleRes, commentsRes]) => {
        setArticle(articleRes.data.article);
        setComments(commentsRes.data.comments);
        setVotes(articleRes.data.article.votes);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load article");
        setIsLoading(false);
      });
  }, [article_id]);

  const handleVote = (direction) => {
    const incVotes = direction === "up" ? 1 : -1;

    setVotes((prevVotes) => prevVotes + incVotes);
    axios
      .patch(
        `https://nc-news-app-axmd.onrender.com/api/articles/${article_id}`,
        { inc_votes: incVotes },
      )
      .catch((err) => {
        setVotes((prevVotes) => prevVotes - incVotes);
        setError("Voting Failed, try again");
      });
  };

  const handlePostComment = () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    setCommentError(null);

    axios
      .post(
        `https://nc-news-app-axmd.onrender.com/api/articles/${article_id}/comments`,
        { username: currentUser, body: newComment },
      )
      .then((res) => {
        setComments((prev) => [res.data.comment, ...prev]);
        setNewComment("");
        setIsSubmitting(false);
      })
      .catch(() => {
        setCommentError("Failed to post comment. Try again.");
        setIsSubmitting(false);
      });
  };

  const handleDeleteComment = (comment_id) => {
    const originalComments = [...comments];
    setComments((prev) => prev.filter((c) => c.comment_id !== comment_id));

    return axios
      .delete(
        `https://nc-news-app-axmd.onrender.com/api/comments/${comment_id}`,
      )
      .catch(() => {
        setComments(originalComments);
        alert("Failed to delete comment. Try again.");
        throw new Error("Delete failed");
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="single-article-page">
      <div className="article-layout">
        <div className="article-wrapper">
          <SingleArticleCard
            article={article}
            votes={votes}
            handleVote={handleVote}
          />
        </div>

        <form
          className="comment-form"
          onSubmit={(e) => {
            e.preventDefault();
            handlePostComment();
          }}
        >
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            disabled={isSubmitting}
            required
          />

          <div className="form-actions">
            <button
              type="submit"
              disabled={isSubmitting || newComment.trim() === ""}
            >
              {isSubmitting ? "Posting..." : "Post Comment"}
            </button>
          </div>

          {commentError && <p className="error">{commentError}</p>}
        </form>
      </div>
      <div className="comments-section">
        <CommentList
          comments={comments}
          currentUser={currentUser}
          onDelete={handleDeleteComment}
        />
      </div>
    </main>
  );
};

export default SingleArticle;
