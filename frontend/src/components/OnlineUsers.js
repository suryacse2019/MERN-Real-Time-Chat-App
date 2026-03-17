import React from 'react';

const mockUsers = ['John Doe', 'Jane Smith', 'Alice'];

function OnlineUsers() {
  return (
    <div className="online-users">
      <h3>Online Users</h3>
      {mockUsers.map(user => (
        <div key={user} className="online-user">
          {user}
        </div>
      ))}
    </div>
  );
}

export default OnlineUsers;