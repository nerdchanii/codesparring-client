import React from 'react';
import InGameHeader from './InGameHeader';
import InGameUserListContainer from './InGameUserListContainer';
import InGameProblemContianer from './InGameProblemContianer';
import './InGame.scss';

function InGameRoom(props) {
  const { roomInfo, onClickStart, ChatComponet, problem } = props;
  const { users } = roomInfo;

  return (
    <div className="InGameRoom">
      <div className="InGameQuest">
        <InGameHeader title={roomInfo.name} />
        <InGameUserListContainer users={users} />
        {problem.id ? (
          <InGameProblemContianer data={problem} />
        ) : (
          <button onClick={onClickStart}>게임시작하기</button>
        )}
      </div>
      <div className="InGameChat">{ChatComponet}</div>
    </div>
  );
}

export default InGameRoom;
