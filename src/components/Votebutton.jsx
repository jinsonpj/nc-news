const VoteButton = ({ direction, handleVoteClick }) => {
  return (
    <button onClick={() => handleVoteClick(direction)}>
      {direction === "up" ? "+1" : "-1"}
    </button>
  );
};

export default VoteButton;
