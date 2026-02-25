import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <section className="comments-section">
      <h3>Comments ({comments.length})</h3>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentList;
