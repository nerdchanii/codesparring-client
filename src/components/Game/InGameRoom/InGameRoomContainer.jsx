import React, { memo, useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatContainer from '../../Chat/ChatContainer';
import { emitGameStart, emitJoin, emitLeave } from '../../../redux/reducers/room.reducer';
import InGameRoom from './InGameRoom';
import { ACTION, actions } from '../../../redux/reducers/code.reducer';

function InGameRoomContainer() {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.room);
  const { username } = useSelector((state) => state.auth.profile);
  const { problem } = useSelector((state) => state);

  const { id } = useParams();
  // const navigate = useNavigate();
  // 컨트롤러
  const onClickStart = useCallback(() => {
    dispatch(emitGameStart());
  }, []);

  const join = useCallback(() => {
    if (roomInfo !== id) {
      dispatch(emitJoin({ id }));
    }
  }, [id]);

  const leave = useCallback(() => {
    dispatch(emitLeave({ id, username }));
  }, [id, username]);

  useEffect(() => {
    join();
    dispatch(actions[ACTION.INIT_CODE]());
    return () => {
      leave();
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
    <InGameRoom
      roomInfo={roomInfo}
      problem={problem}
      onClickStart={onClickStart}
      ChatComponet={<ChatContainer />}
    />
  );
}

export default memo(InGameRoomContainer);
