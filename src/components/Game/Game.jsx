import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import InGameRoomContainer from './InGameRoom/InGameRoomContainer';

function Game() {
  return (
    <>
      <Routes>
        <Route path="" element={<WaitingRoom />} />
        <Route path=":id" element={<InGameRoomContainer />} />
      </Routes>
    </>
  );
}

export default Game;
