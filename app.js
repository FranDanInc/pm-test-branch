// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user[0]} onClick={() => handleUserSelect(user)}>
              {user[1]} {/* Assuming the name is in the second column (index 1) */}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {selectedUser ? (
          <div>
            <h2>{selectedUser[1]}</h2>
            <p>Email: {selectedUser[2]}</p>
            {/* Add other user info here */}
          </div>
        ) : (
          <p>Select a user to view details.</p>
        )}
      </div>
    </div>
  );
};

export default App;
