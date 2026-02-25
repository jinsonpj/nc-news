const CommentCard = ({ comment }) => {
  return (
    <ul className="comment-card">
      <p>
        <strong>{comment.author}</strong>{" "}
        {new Date(comment.created_at).toLocaleDateString()}
      </p>

      <p>{comment.body}</p>

      <p>{comment.votes} votes</p>
    </ul>
  );
};

export default CommentCard;
