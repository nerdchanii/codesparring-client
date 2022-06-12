import React from 'react';

const ChatLogItem = React.memo((props) => {
  const { item } = props;
  const { username, message } = item;
  return (
    <div className="ChatLogItem">
      <div className="Username">{username}</div>
      <div className="UserMessage">{message}</div>
    </div>
  );
});

function ChatLog(props) {
  const { messages } = props;
  return (
    <div className="ChatLog">
      {messages ? messages.map((item, idx) => <ChatLogItem key={idx} item={item} />) : <></>}
    </div>
  );
}

export default React.memo(ChatLog);
