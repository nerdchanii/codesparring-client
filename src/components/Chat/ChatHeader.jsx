import React from 'react';

function ChatHeader(props) {
  // eslint-disable-next-line react/prop-types
  const { roomName } = props;
  if (!roomName) return <></>;
  if (roomName.startsWith('[practice')) {
    return (
      <div className="ChatHeader">
        <div className="RoomName">[practice]</div>
      </div>
    );
  }
  return <div className="ChatHeader">{roomName}</div>;
}

export default ChatHeader;
