import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <section>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;
