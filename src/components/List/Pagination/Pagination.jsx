import React, { useState } from "react";
import styles from './pagination.module.css'

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage || 1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  const handlePreviousClick = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${
          page === totalPages ? "pageItemAInactive" : "pageItemActive"
        }`}
        disabled={page === 1}
        onClick={handlePreviousClick}
      >
        First
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
{
  /* <ul className={styles.pagination}>
        <li className={styles.pageItemInactive}>
          <a href="!#" className={`${styles.muted}`}>
            First
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a href="!#" className={styles.inactiveLink}>
            1
          </a>
        </li>
        <li className={`${styles.pageItemActive}`}>
          <a href="!#" className={`${styles.activeLink}`}>
            2
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a href="!#" className={styles.inactiveLink}>
            3
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a href="!#" className={styles.inactiveLink}>
            Next
          </a>
        </li>
      </ul> */
}
