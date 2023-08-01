// App.js
import React, { useState } from 'react';
import UserList from './UserList';
import UserInfo from './UserInfo';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <UserList onSelectUser={handleUserSelect} />
      <UserInfo selectedUser={selectedUser} />
    </div>
  );
};

export default App;
