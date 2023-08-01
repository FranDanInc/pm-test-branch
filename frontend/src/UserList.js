// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    axios.get('/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="sidebar">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user[0]} onClick={() => onSelectUser(user)}>
            {user[1]} {/* Assuming the name is in the second column (index 1) */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
