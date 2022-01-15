import RankedContainer from './BoardContainer';
import BoardList from './BoardList';
const LeaderBoard = () => {
  return (
    <div>
      <RankedContainer>
        <BoardList />
      </RankedContainer>
    </div>
  );
};

export default LeaderBoard;
