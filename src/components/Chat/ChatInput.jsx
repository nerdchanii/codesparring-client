import React from 'react';

function ChatInput(props) {
  const { onSubmit, value, onChange } = props;
  return (
    <form onSubmit={onSubmit} className="ChatInput ChatInputForm">
      <input className="ChatInput-input" value={value} onChange={onChange} />
    </form>
  );
}

export default ChatInput;
