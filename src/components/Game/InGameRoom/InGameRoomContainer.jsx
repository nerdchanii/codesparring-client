import React, { useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ChatContainer from '../../Chat/ChatContainer';
import { joinRoom, leaveRoom } from '../../../redux/reducers/game.reducer';
import InGameRoom from './InGameRoom';

function InGameRoomContainer() {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.game.room);
  const { username } = useSelector((state) => state.auth.profile);
  const { id } = useParams();
  const navigate = useNavigate();

  // 컨트롤러
  const onClickStart = useCallback(() => {
    console.log('start');
  }, []);

  const join = useCallback(() => {
    dispatch(joinRoom({ id, username }));
  }, [id, username]);

  const leave = useCallback(() => {
    dispatch(leaveRoom({ id, username }));
  }, [id, username]);

  useEffect(() => {
    join();
    return () => {
      leave();
      navigate('/sparring');
    };
  }, []);

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
    <InGameRoom roomInfo={roomInfo} onClickStart={onClickStart} ChatComponet={<ChatContainer />} />
  );
}

export default InGameRoomContainer;
