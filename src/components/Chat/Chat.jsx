import React from 'react';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';
import './Chat.scss';

function Chat(props) {
  const { change, submit, messages, value, roomname, users } = props;
  if (!messages) return <></>;

  return (
    <div className="Chat">
      <ChatHeader roomName={roomname} users={users} />
      <ChatBody>
        <ChatLog messages={messages} />
        <ChatInput onSubmit={submit} value={value} onChange={change} />
      </ChatBody>
    </div>
  );
}

export default Chat;
