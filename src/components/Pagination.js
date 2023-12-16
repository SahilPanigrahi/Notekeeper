import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showPagination = totalPages > 1;

  return (
    <div className={`pagination ${showPagination ? '' : 'hidden'}`}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      <span className='span-page'>{`${currentPage} / ${totalPages}`}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;