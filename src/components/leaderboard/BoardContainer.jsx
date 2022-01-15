const BoardContainer = ({ children }) => {
  return (
    <div className="BoardContainer">
      <div className="Board-title">LeaderBoard</div>
      <div className="Board-list">{children}</div>
    </div>
  );
};

export default BoardContainer;
