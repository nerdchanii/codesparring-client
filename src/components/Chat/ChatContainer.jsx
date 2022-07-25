import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emitMessage } from '../../redux/reducers/room.reducer';
import Chat from './Chat';

// import socket from '../../socket/socket';

function ChatContainer() {
  const { message: messages, name: roomName } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  // pathname 에 맞는 룸을 연결시키기 위함

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(emitMessage(value));
    setValue('');
  };

  return (
    <Chat
      change={onChange}
      submit={onSubmit}
      messages={messages}
      value={value}
      roomname={roomName}
    />
  );
}

export default ChatContainer;
