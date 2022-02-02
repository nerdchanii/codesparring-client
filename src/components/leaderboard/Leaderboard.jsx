import React from 'react';
import BoardList from './BoardList';
import './LeaderBoard.scss';

function LeaderBoard() {
  return (
    <div className="LeaderBoard">
      <div className="BoardHeader">LeaderBoard</div>
      <BoardList />
    </div>
  );
}

export default LeaderBoard;
