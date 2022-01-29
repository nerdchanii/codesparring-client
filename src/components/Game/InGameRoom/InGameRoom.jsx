import React from 'react';
import Chat from '../../../Pages/Chat/Chat';
import InGameHeader from './InGameHeader';
import '../Game.scss';
const InGameRoom = () => {
  return (
    <>
      <InGameHeader />
      <Chat />
    </>
  );
};

export default InGameRoom;
