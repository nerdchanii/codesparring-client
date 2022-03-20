import React from 'react';

function ChatBody({ children }) {
  if (!children) return <></>;

  return <div className="ChatBody">{children}</div>;
}

export default ChatBody;
