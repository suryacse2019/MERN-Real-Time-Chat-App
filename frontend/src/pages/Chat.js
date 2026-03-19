import React, { useState } from 'react';
import ConversationList from '../components/Conversation';
import ChatBox from '../components/ChatBox';

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);
 
  return (
    <div className="app-container"> 
       
      <div className="sidebar">
        <div className="sidebar-header">💬 ChatApp</div>

        <div className="section">
          <h4>Chats</h4>
          <ConversationList onSelectChat={setSelectedUser} />
        </div>
      </div>
 
      <div className="chat-area">
        {selectedUser ? (
          <>
            <div className="chat-header"> 
               
              <h3> {selectedUser.name} </h3>
 
              <span className="status">
                {selectedUser.isOnline ? "🟢 Online" : "⚫ Offline"}
              </span>
            </div>
 
            <ChatBox receiver={selectedUser} />
          </>
        ) : (
          <div className="empty-chat">
            💬 Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatPage;