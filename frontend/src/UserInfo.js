// UserInfo.js
import React from 'react';

const UserInfo = ({ selectedUser }) => {
  return (
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
  );
};

export default UserInfo;
