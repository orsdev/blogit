import React from 'react';

function Pagination() {
  return (
    <nav aria-label="Page navigation" className="mt-5">
      <ul className="pagination d-flex justify-content-between">
        <li className="page-item btn">
          <span aria-hidden="true">&laquo;</span>
          <span className="ml-1 page-link d-inline-block">Previous</span>
        </li>
        <li className="page-item  disabled btn">
          <span className="mr-1 page-link d-inline-block">Next</span>
          <span aria-hidden="true">&raquo;</span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
