import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import LOGIN_STATE from '../../../state/login';
import roomAtom from '../../../state/room/roomAtom';
import InGameHeader from './InGameHeader';
import InGameUserListContainer from './InGameUserListContainer';
import InGameProblemContianer from './InGameProblemContianer';
import './InGame.scss';
import { joinGame, leaveGame } from './api';
import ChatContainer from '../../Chat/ChatContainer';
import socket from '../../../constants/socket/socket';
import problemNumberState from '../../../state/problem/problemNumberState';

function InGameRoom() {
  const [problem, setProblem] = useState(null);
  const [roomInfo, setRoomInfo] = useRecoilState(roomAtom);
  const loginState = useSetRecoilState(LOGIN_STATE);
  const probmlemNumber = useSetRecoilState(problemNumberState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const onClickStart = () => {
    console.log('click');

    socket.emit('gamestart', { roomId: roomInfo.roomId });
  };

  const join = useCallback(() => {
    joinGame(id)
      .then((res) => {
        setRoomInfo(res);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('인원이 꽉 찼습니다');
            navigate('/sparring');
            break;
          case 404:
            alert('서버오류');
            navigate('/sparring');
            break;
          case 401:
            alert('다시 로그인해주세요');
            localStorage.clear();
            loginState(false);
            navigate('/sparring');
            break;
          default:
            alert('오류');
            navigate('/sparring');
            break;
        }
      });
  }, []);

  const leave = useCallback(() => {
    leaveGame(id);
  }, []);

  useEffect(() => {
    join(id);
    console.log('listener join');

    socket.on('gamestart', (data) => {
      console.log('gamestart', data);
      setLoading(true);
      setProblem(data);
      probmlemNumber(data.id);
      socket.off('gamestart');
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
    return () => {
      leave(id);
    };
  }, [id]);

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
        <InGameUserListContainer users={roomInfo.userList} />
        {!loading && !problem && <button onClick={onClickStart}>게임시작하기</button>}
        {loading && (
          <div style={{ margin: 'auto' }}>
            <CircularProgress />
          </div>
        )}
        {!loading && problem && <InGameProblemContianer data={problem} />}
      </div>
      <div className="InGameChat">
        <ChatContainer room={roomInfo.roomId} />
      </div>
    </div>
  );
}

export default InGameRoom;
