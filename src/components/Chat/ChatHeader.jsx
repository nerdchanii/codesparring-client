const ChatHeader = ({ roomName }) => {
  if (!roomName) return <></>;
  if (roomName) return <div className="ChatHeader">{roomName}</div>;
};

export default ChatHeader;
