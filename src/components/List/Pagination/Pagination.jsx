import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {currentPage > 1 && (
          <li>
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? `${styles.pageItemActive}`
                : `${styles.pageItemInactive}`
            }
          >
            <button
              onClick={() => handlePageChange(number)}
              className={
                number === currentPage
                  ? `${styles.activeLink}`
                  : `${styles.inactiveLink}`
              }
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
