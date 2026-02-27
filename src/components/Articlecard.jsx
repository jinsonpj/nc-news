import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="article-card-link">
      <article className="article-card">
        <img src={article.article_img_url} alt={article.title} />

        <div className="article-content">
          <h3>{article.title}</h3>
          <p className="meta">
            By {article.author} • {article.topic}
          </p>

          <p className="meta">
            {article.votes} votes • {article.comment_count} comments
          </p>

          <p className="date">
            {new Date(article.created_at).toLocaleDateString()}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
