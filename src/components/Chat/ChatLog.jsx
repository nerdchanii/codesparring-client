import React from 'react';

function ChatLogItem(props) {
  const { item } = props;
  const { user, message } = item;
  return (
    <div className="ChatLogItem">
      <div className="Username">{user}</div>
      <div className="UserMessage">{message}</div>
    </div>
  );
}

function ChatLog(props) {
  const { messages } = props;
  if (!messages) return <></>;
  if (messages) {
    return (
      <div className="ChatLog">
        {messages.map((item, idx) => (
          <ChatLogItem key={idx} item={item} />
        ))}
      </div>
    );
  }
}

export default ChatLog;
