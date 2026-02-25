import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../src/components/articleslist";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://nc-news-app-axmd.onrender.com/api/articles")
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h3>List of Articles</h3>
      <ArticleList articles={articles} />
    </main>
  );
};

export default Articles;
