import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import WaitingRoomHeader from './WaitingRoomHeader';
import RoomList from './RoomList';
import './WaitingRoom.scss';
import env from '../../../env';

function WaitingRoom() {
  const [gameRooms, setgameRoom] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchRoomList();
    setLoading(true);
    axios
      .get(`${env.API_URL}/api/game/list`)
      .then((response) => setgameRoom(response.data))
      .catch(() => console.log('error'))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
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
  if (!loading) {
    return (
      <>
        <WaitingRoomHeader />
        {gameRooms ? (
          <RoomList gameRooms={gameRooms} />
        ) : (
          <div>게임 룸을 불러오지 못했습니다.새로침해주세요!</div>
        )}
      </>
    );
  }
}

export default WaitingRoom;
