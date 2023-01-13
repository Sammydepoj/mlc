import React from "react";
import styles from "./pagination.module.css";
const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage)-1; i++) {
    pages.push[i];
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            style={{ border: "10px solid green" }}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {/* <ul className={styles.pagination}>
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
      </ul> */}
    </div>
  );
};

export default Pagination;
