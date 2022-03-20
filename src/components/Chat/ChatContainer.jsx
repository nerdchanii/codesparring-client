import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Chat from './Chat';
import socket from '../../constants/socket/socket';
import roomAtom from '../../state/room/roomAtom';
import userList from '../../state/room/userList';

function ChatContainer() {
  const roomInfo = useRecoilValue(roomAtom);
  const setRoomUserList = useSetRecoilState(userList);
  const { pathname } = useLocation();
  const room = roomInfo?.roomId || pathname.split('/')[1];
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  // pathname 에 맞는 룸을 연결시키기 위함
  useEffect(() => {
    setMessages([]);
    socket.on('message', ({ room: roomId, ...message }) => {
      if (roomId === room) {
        setMessages((prev) => [message, ...prev]);
      }
    });
    console.log(room, room);
    socket.emit('join', room);

    socket.on('updateUser', (list) => {
      console.log('userList update');
      setRoomUserList(list);
    });
    socket.emit('updateUser', room);
    return () => {
      socket.emit('leave', room);
      console.log('chat unmount: leave');
      socket.off('message');
      setMessages([]);
    };
  }, [roomInfo]);

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
