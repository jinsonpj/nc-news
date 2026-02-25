const SingleArticleCard = ({ article }) => {
  return (
    <article className="single-article-card">
      <h4>{article.title}</h4>
      <p>By {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.votes} votes</p>
      <p>Published on {new Date(article.created_at).toLocaleDateString()}</p>
    </article>
  );
};

export default SingleArticleCard;
