import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chat from './Chat';
import socket, { ANONY } from '../../constants/socket/socket';

function ChatContainer(props) {
  const { room } = props;
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const { pathname } = useLocation();
  const home = pathname.split('/')[1];

  // pathname 에 맞는 룸을 연결시키기 위함
  useEffect(() => {
    socket.auth = { token: localStorage.getItem('LOGIN_TOKEN') || { nickName: ANONY } };
    setMessages([]);
    const space = room || home;

    socket.connect();
    socket.emit('join', space);
    socket.on('message', (message) => {
      setMessages((prev) => [message, ...prev]);
    });

    return () => {
      socket.off('message');
      socket.disconnect();
      setMessages([]);
    };
  }, [room]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) socket.emit('message', { value, room });
    setValue('');
  };

  return (
    <Chat
      change={onChange}
      submit={onSubmit}
      messages={messages}
      value={value}
      roomname={`[${pathname.replace('/', '').replaceAll('/', ' : ')}]`}
    />
  );
}

export default ChatContainer;
