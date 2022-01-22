import BoardList from './BoardList';
import './LeaderBoard.scss';

const LeaderBoard = () => {
  return (
    <div className="LeaderBoard">
      <div className="BoardHeader">LeaderBoard</div>
      <BoardList />
    </div>
  );
};

export default LeaderBoard;
