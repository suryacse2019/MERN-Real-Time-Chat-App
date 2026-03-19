import React, { useState } from 'react';
import ConversationList from '../components/Conversation';
import ChatBox from '../components/ChatBox';
import OnlineUsers from '../components/OnlineUsers';

function ChatPage() {
  const [currentChat, setCurrentChat] = useState(null);

  // ✅ get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ find other user in chat
  const otherUser = currentChat?.participants?.find(
    (p) => p._id !== user?._id
  );

  return (
    <div className="app-container"> 
      <div className="sidebar">
        <div className="sidebar-header">💬 ChatApp</div>

        <div className="section">
          <h4>Chats</h4>
          <ConversationList onSelectChat={setCurrentChat} />
        </div>

        <div className="section">
          <h4>Online</h4>
          <OnlineUsers />
        </div>
      </div>
 
      <div className="chat-area">
        {currentChat ? (
          <>
            <div className="chat-header">
              {/* ✅ dynamic name */}
              <h3>{otherUser?.name || "User"}</h3>
              <span className="status">🟢 Online</span>
            </div>

            <ChatBox chat={currentChat} />
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