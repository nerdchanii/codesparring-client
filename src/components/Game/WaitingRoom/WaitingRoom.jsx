import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getRooms } from '../../../redux/reducers/rooms.reducer';

import WaitingRoomHeader from './WaitingRoomHeader';
// import Board from '../../board';
import './WaitingRoom.scss';
import RoomList from './RoomList';

function WaitingRoom() {
  const { rooms } = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchRoomList = useCallback(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    fetchRoomList();
  }, []);

  if (!rooms) {
    return (
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <CircularProgress sx={{ color: '#2f9272' }} />
      </div>
    );
  }

  return (
    <>
      <WaitingRoomHeader />
      {rooms ? (
        <RoomList className="RoomList" rooms={rooms} />
      ) : (
        <div>게임 룸을 불러오지 못했습니다.새로침해주세요!</div>
      )}
    </>
  );
}

export default WaitingRoom;
