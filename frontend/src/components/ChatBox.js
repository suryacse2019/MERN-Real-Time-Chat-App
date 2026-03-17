import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';

function ChatBox({ chat }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', text: 'Hello!' },
    { id: 2, sender: 'You', text: 'Hi, how are you?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = e => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'You', text: newMessage }]);
    setNewMessage(''); 
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="messages">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="message-input-container" onSubmit={handleSendMessage}>
        <input
          className="message-input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button className="send-button" type="submit">Send</button>
      </form>
    </>
  );
}

export default ChatBox;