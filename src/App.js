import React from 'react';
import CustomPagination from './component/CustomPagination';
const App = () => {
 
  const users = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
    { name: 'User 3', email: 'user1@example.com' },
    { name: 'User 4', email: 'user2@example.com' },
    { name: 'User 5', email: 'user1@example.com' },
    { name: 'User 6', email: 'user2@example.com' },
    { name: 'User 7', email: 'user1@example.com' },
    { name: 'User 8', email: 'user2@example.com' },
    { name: 'User 9', email: 'user1@example.com' },
    { name: 'User 10', email: 'user2@example.com' },
    { name: 'User 11', email: 'user1@example.com' },
    { name: 'User 12', email: 'user2@example.com' },

  ];

  return (
    <div className="App">
      <CustomPagination users={users} usersPerPage={4} />
    </div>
  );
};

export default App;



