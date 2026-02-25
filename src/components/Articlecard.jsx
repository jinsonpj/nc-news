import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h4>{article.title}</h4>
      </Link>
      <p>By {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>
        {article.votes} votes | {article.comment_count} comments
      </p>
      <p>Published on {new Date(article.created_at).toLocaleDateString()}</p>
    </article>
  );
};

export default ArticleCard;
