import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';
import './Chat.scss';

const END_POINT = 'http://localhost:5000';
const TOKEN = `TESTER+${Math.floor(Math.random() * 10000).toString()}`;
let socket;

function Chat() {
  const { pathname } = useLocation();

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  // const [welcome, setWelcome] = useState('');

  // TODO: token 추가해야함

  // pathname 에 맞는 룸을 연결시키기 위함
  useEffect(() => {
    socket = io(END_POINT, {
      auth: {
        token: TOKEN,
      },
    });
    socket.emit('join', pathname);

    socket.on('message', (message) => {
      if (messages.length === 0) {
        setMessages([message]);
      } else {
        setMessages([message, ...messages]);
      }
    });

    // socket.on('roomData', (data) => {
    // });
    console.log(socket);

    return () => {
      socket.emit('leave');
      socket.disconnect();
      setMessages(null);
    };
  }, [pathname]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) socket.emit('message', value);
    setValue('');
  };

  if (!messages) return <></>;

  return (
    <div className="Chat">
      <ChatHeader roomName={`[${pathname.replace('/', '').replaceAll('/', ':')}]`} />
      <ChatBody>
        <ChatLog messages={messages} />
        <ChatInput onSubmit={onSubmit} value={value} onChange={onChange} />
      </ChatBody>
    </div>
  );
}

export default Chat;