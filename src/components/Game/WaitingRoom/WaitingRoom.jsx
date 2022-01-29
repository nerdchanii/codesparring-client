import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import WaitingRoomHeader from './WaitingRoomHeader';
import RoomList from './RoomList';
import '../Game.scss';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const WaitingRoom = () => {
  const [gameRooms, setgameRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchRoomList = useCallback(async () => {
    setLoading(true);
    try {
      const mock = await axios.get('/api/game/lists');
      const response = mock.data;

      setgameRoom(response);
    } catch (e) {
      console.log('error!!');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoomList();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <CircularProgress sx={{ color: '#2f9272' }} />
      </Box>
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
};

export default WaitingRoom;
