import React from "react";
import styles from "./pagination.module.css";
const Pagination = () => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <nav>
      <ul className={styles.pagination}>
        <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={`${styles.muted}`}
          >
            First
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={styles.inactiveLink}
          >
            1
          </a>
        </li>
        <li className={`${styles.pageItemActive}`}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={`${styles.activeLink}`}
          >
            2
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={styles.inactiveLink}
          >
            3
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={styles.inactiveLink}
          >
            Next
          </a>
        </li>
        {/* <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={styles.inactiveLink}
          >
            First
          </a>
        </li>
        <li className={styles.pageItemInactive}>
          <a
            // onClick={() => paginate(number)}
            href="!#"
            className={styles.inactiveLink}
          >
            First
          </a>
        </li> */}

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
