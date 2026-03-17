import React from 'react';

function Message({ message }) {
  const isSentByUser = message.sender === 'You';

  return (
    <div className={`message ${isSentByUser ? 'sent' : ''}`}>
      <strong>{!isSentByUser && message.sender}</strong> {message.text}
    </div>
  );
}

export default Message;