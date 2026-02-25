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
        { incVotes },
      )
      .catch((err) => {
        setVotes((prevVotes) => prevVotes - incVotes);
        setError("Voting Failed, try again");
      });
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <SingleArticleCard
        article={article}
        votes={votes}
        handleVote={handleVote}
      />
      <CommentList comments={comments} />
    </main>
  );
};

export default SingleArticle;
