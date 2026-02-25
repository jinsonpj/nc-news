const CommentCard = ({ comment }) => {
  return (
    <article className="comment-card">
      <p>By {comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p>Published on {new Date(comment.created_at).toLocaleDateString()}</p>
    </article>
  );
};

export default CommentCard;
