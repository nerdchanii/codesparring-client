import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import socket from '../../../constants/socket/socket';
import LOGIN_STATE from '../../../state/login';
import problemAtom from '../../../state/problem/ProblemAtom';
import problemNumberState from '../../../state/problem/problemNumberState';
import roomAtom from '../../../state/room/roomAtom';
import ChatContainer from '../../Chat/ChatContainer';
import { joinGame, leaveGame } from './api';
import InGameRoom from './InGameRoom';

function InGameRoomContainer() {
  const loginState = useSetRecoilState(LOGIN_STATE);
  const setProblemNumber = useSetRecoilState(problemNumberState);
  const setProblem = useSetRecoilState(problemAtom);
  const [roomInfo, setRoomInfo] = useRecoilState(roomAtom);

  const { id } = useParams();
  const navigate = useNavigate();

  // 컨트롤러
  const onClickStart = useCallback(() => {
    console.log('click');
    socket.emit('gamestart', { room: roomInfo.roomId });
  }, [roomInfo]);

  const join = useCallback(
    async (roomNumber) => {
      await joinGame(roomNumber)
        .then((resData) => {
          console.log('room join!');
          setRoomInfo(resData);
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              alert('인원이 꽉 차서 입장할 수 없습니다.');
              navigate('/sparring');
              break;
            case 404:
              alert('방이 사라졌습니다.');
              navigate('/sparring');
              break;
            case 401:
              alert('로그인 시간이 만료되었습니다. 다시 로그인해주세요!');
              localStorage.clear();
              loginState(false);
              navigate('/sparring');
              break;
            default:
              // eslint-disable-next-line no-restricted-globals
              if (confirm('서버에 문제가 있습니다. 코드스파링에 신고해주시겠나요?')) {
                navigate('https://github.com/nerdchanii/codesparring-client/issues');
              } else {
                navigate('/sparring');
              }
              break;
          }
        });
    },
    [roomInfo],
  );

  const leave = useCallback((roomNumber) => {
    console.log('leave:', roomNumber, roomInfo);
    leaveGame(roomNumber);
    setRoomInfo(null);
  }, []);

  useEffect(() => {
    join(id);
    console.log('room join', id, roomInfo);

    socket.on('gamestart', (data) => {
      console.log('gamestart', data);
      socket.off('gamestart');
      setTimeout(() => {
        setProblem(data);
        setProblemNumber(data.id);
      }, 3000);
    });

    return () => {
      leave(id);
    };
  }, [id]);

  return (
    <InGameRoom roomInfo={roomInfo} onClickStart={onClickStart} ChatComponet={<ChatContainer />} />
  );
}

export default InGameRoomContainer;
