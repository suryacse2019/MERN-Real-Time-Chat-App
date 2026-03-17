import React, { useState, useEffect } from 'react';
import ConversationList from '../components/Conversation';
import ChatBox from '../components/ChatBox';
import OnlineUsers from '../components/OnlineUsers';

function ChatPage() {
  const [currentChat, setCurrentChat] = useState(null);

  // TODO: Fetch conversations and online users

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2 style={{padding: '15px', borderBottom: '1px solid #444'}}>Conversations</h2>
        <ConversationList onSelectChat={setCurrentChat} />
        <OnlineUsers />
      </div>
      <div className="chat-area">
        {currentChat ? (
          <ChatBox chat={currentChat} />
        ) : (
          <div style={{ padding: '20px' }}>Select a conversation to start chatting</div>
        )}
      </div>
    </div>
  );
}

export default ChatPage;