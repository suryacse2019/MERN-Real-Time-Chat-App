import React, {useState, useEffect} from 'react';
import API from '../api.js';

 

function ConversationList({ onSelectChat }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get('/users'); 
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="conversation-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(user => (
          <div
            key={user._id}  
            className="conversation-item"
            onClick={() => onSelectChat(user)}
          >
            {user.name}
          </div>
        ))
      )}
    </div>
  );
}

export default ConversationList;