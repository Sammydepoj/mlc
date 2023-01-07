import React from "react";
import "./pagination.module.css";
const Pagination = () => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item-inactive">
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className="active-link"
          >
            First
          </a>
        </li>
        <li className="page-item-inactive">
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className="active-link"
          >
            First
          </a>
        </li>
        <li className="page-item-inactive">
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className="active-link"
          >
            First
          </a>
        </li>

        {/* {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default Pagination;
