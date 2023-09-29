import React, { useState } from 'react';
import "../component/CustomPagination.css"
const CustomPagination = ({ users, usersPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  
  const totalPages = Math.ceil(users.length / usersPerPage);

  
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="custom-pagination">
      <h1>User Details</h1>
      <div className="user-list">
        {currentUsers.map((user, index) => (
          <div key={index} className="user-item">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomPagination;





