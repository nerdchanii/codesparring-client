import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import InGameRoomContainer from './InGameRoom/InGameRoomContainer';
import LoginNeeded from '../LoginNeeded';

function Game() {
  const islogin = useSelector((state) => state.auth.isLoggedIn);
  if (!islogin) {
    return <LoginNeeded />;
  }

  return (
    <>
      <Routes>
        <Route path="" element={<WaitingRoom />} />
        <Route path=":id" element={<InGameRoomContainer />} />
      </Routes>
    </>
  );
}

export default memo(Game);
