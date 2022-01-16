import BoardHeader from './BoardHeader';
import BoardList from './BoardList';
import './LeaderBoard.scss';

const LeaderBoard = () => {
  return (
    <div className="LeaderBoard">
      <BoardHeader />
      <BoardList />
    </div>
  );
};

export default LeaderBoard;
