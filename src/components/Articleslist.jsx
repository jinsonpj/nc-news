const ArticlesList = ({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) => {
  return (
    <div>
      <p> {title}</p>
    </div>
  );
};

export default ArticlesList;
