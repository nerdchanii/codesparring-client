import React from 'react';

function ChatHeader(props) {
  // eslint-disable-next-line react/prop-types
  const { roomName, users } = props;
  if (!roomName) return <></>;
  return (
    <div className="ChatHeader">
      <span>{roomName}</span>
      <span>{!!users ? users : ''}</span>
    </div>
  );
}

export default ChatHeader;
