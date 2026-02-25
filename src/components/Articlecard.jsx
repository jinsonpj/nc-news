const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <h4>{article.title}</h4>
      <p>By {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>
        {article.votes} votes • {article.comment_count} comments
      </p>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
    </article>
  );
};

export default ArticleCard;
