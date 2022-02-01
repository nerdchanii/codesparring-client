import React from 'react';

const ChatInput = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="ChatInput ChatInputForm">
      <input className="ChatInput-input" value={value} onChange={onChange} />
    </form>
  );
};

export default ChatInput;
