import React, { useState } from 'react';
import CustomPagination from './CustomPagination'; 
import "./CustomPagination.css"

const userList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  
];

function UserList() {
  const itemsPerPage = 5; 
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToShow = userList.slice(startIndex, endIndex);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul className="user-list">
        {usersToShow.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default UserList;
