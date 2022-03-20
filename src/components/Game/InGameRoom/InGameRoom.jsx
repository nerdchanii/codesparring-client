import React from 'react';
import { useRecoilValue } from 'recoil';
import { CircularProgress } from '@mui/material';
import InGameHeader from './InGameHeader';
import InGameUserListContainer from './InGameUserListContainer';
import InGameProblemContianer from './InGameProblemContianer';
import problemAtom from '../../../state/problem/ProblemAtom';
import './InGame.scss';
import userList from '../../../state/room/userList';

function InGameRoom(props) {
  const { roomInfo, onClickStart, ChatComponet } = props;
  const problem = useRecoilValue(problemAtom);
  const roomUserList = useRecoilValue(userList);
  if (!roomInfo) {
    return (
      <div className="InGameRoom">
        <div className="loading">
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className="InGameRoom">
      <div className="InGameQuest">
        <InGameHeader title={roomInfo.roomTitle} />
        <InGameUserListContainer users={roomUserList} />
        {!problem && <button onClick={onClickStart}>게임시작하기</button>}
        {problem && <InGameProblemContianer data={problem} />}
      </div>
      <div className="InGameChat">{ChatComponet}</div>
    </div>
  );
}

export default InGameRoom;
