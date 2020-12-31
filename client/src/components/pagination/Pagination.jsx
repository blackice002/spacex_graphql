import React from "react";
import "./pagination.scss";

const Pagination = ({ previousPage, nextPage, paginate, totalPages }) => {
  const pagenumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pagenumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        <li onClick={previousPage}>&laquo;</li>
        {pagenumbers.map((pageNumber, i) => (
          <li  key ={pageNumber}onClick={() => paginate(pageNumber)}>{pageNumber}</li>
        ))}
        <li onClick={nextPage}>&raquo;</li>
      </ul>
    </div>
  );
};

export default Pagination;
