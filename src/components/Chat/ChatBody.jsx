import React from 'react';

const ChatBody = ({ children }) => {
  if (!children) return <></>;
  if (children) {
    return <div className="ChatBody">{children}</div>;
  }
};

export default ChatBody;
