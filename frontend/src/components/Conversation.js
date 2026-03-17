import React from 'react';

const mockConversations = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

function ConversationList({ onSelectChat }) {
  return (
    <div className="conversation-list">
      {mockConversations.map(conv => (
        <div
          key={conv.id}
          className="conversation-item"
          onClick={() => onSelectChat(conv)}
        >
          {conv.name}
        </div>
      ))}
    </div>
  );
}

export default ConversationList;