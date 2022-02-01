import React from 'react';

const ChatLogItem = ({ item }) => {
  return (
    <div className="ChatLogItem">
      <div className="Username">{item.user}</div>
      <div className="UserMessage">{item.message}</div>
    </div>
  );
};
const ChatLog = ({ messages }) => {
  return (
    <div className="ChatLog">
      {messages.map((item, idx) => (
        <ChatLogItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default ChatLog;
