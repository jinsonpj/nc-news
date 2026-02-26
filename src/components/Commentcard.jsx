import { useState } from "react";

const CommentCard = ({ comment, currentUser, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    if (!window.confirm("Are you sure you want to delete this comment?"))
      return;

    setIsDeleting(true);
    onDelete(comment.comment_id).finally(() => {
      setIsDeleting(false);
    });
  };

  return (
    <li className="comment-card">
      <p>
        <strong>{comment.author}</strong>{" "}
        {new Date(comment.created_at).toLocaleDateString()}
      </p>
      <p>{comment.body}</p>
      <p>{comment.votes} votes</p>

      {currentUser === comment.author && (
        <button
          onClick={handleDeleteClick}
          disabled={isDeleting}
          className="delete-button"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      )}
    </li>
  );
};

export default CommentCard;
