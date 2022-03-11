import React from 'react';
import './BoardListItem.scss';

function BoardListHeader() {
  return (
    <div className="BoardListHeader">
      <div className="Ranking">Ranking</div>
      <div className="NickName">NickName</div>
      <div className="point">point</div>
    </div>
  );
}

export default BoardListHeader;
