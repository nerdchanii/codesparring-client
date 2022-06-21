import React from 'react';

function ChatHeader(props) {
  // eslint-disable-next-line react/prop-types
  const { roomName, users } = props;
  if (!roomName) return <></>;
  return (
    <div className="ChatHeader">
      <span>Room:{roomName}</span>
      <div>{!!users ? users.map((user) => <span>{user}</span>) : ''}</div>
    </div>
  );
}

export default ChatHeader;
