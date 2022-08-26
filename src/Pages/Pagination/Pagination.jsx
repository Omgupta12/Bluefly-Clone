import { Button } from "@chakra-ui/react";
import React from "react";
// import "../Products/Products.css";

const Paginate = ({ currentPage, setCurrentPage, totalPosts, postPerPage }) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }
  console.log("page")

  return (
    <ul className="pagination" >
      <li className={`page-item ${currentPage === 1 && `disabled`}`}>
        <Button color={'black'}
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &laquo;
        </Button>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${page === currentPage && `active`}`}
          onClick={() => setCurrentPage(page)}
        >
          <Button color={'black'} className="page-link">{page}</Button>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
        <Button color={'black'}
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &raquo;
        </Button>
      </li>
    </ul>
  );
};

export default Paginate;