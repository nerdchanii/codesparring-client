import React from 'react';

function ChatHeader(props) {
  // eslint-disable-next-line react/prop-types
  const { roomName } = props;
  if (!roomName) return <></>;
  return (
    <div className="ChatHeader">
      <span>Room:{roomName}</span>
    </div>
  );
}

export default ChatHeader;
