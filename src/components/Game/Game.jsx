import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import InGameRoom from './InGameRoom/InGameRoom';

function Game() {
  return (
    <>
      <Routes>
        <Route path="" element={<WaitingRoom />} />
        <Route path=":param" element={<InGameRoom />} />
      </Routes>
    </>
  );
}

export default Game;
