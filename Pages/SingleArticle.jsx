import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleArticleCard from "../src/components/SingleArticleCard";
import CommentList from "../src/components/Commentlist";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
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
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load article");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <SingleArticleCard article={article} />
      <CommentList comments={comments} />
    </main>
  );
};

export default SingleArticle;
