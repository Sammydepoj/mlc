import React from "react";
import styles from "./flexible.module.css";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import image4 from "./Assets/image4.png";

const Flexible = () => {
  return (
    <div className={styles.flexible}>
      <div className={styles.flexibleImages}>
        <div className={styles.imgContainer1}>
          <p>Flexible Leases</p>
          {/* <img src={image1} alt="avalable home" /> */}
        </div>
        <div className={styles.imgContainer2}>
          <p>7-Day Happiness Guaranteed</p>
          {/* <img src={image2} alt="avalable home" /> */}
        </div>
        <div className={styles.imgContainer3}>
          <p>Monthly House Cleaning</p>
          {/* <img src={image3} alt="avalable home" /> */}
        </div>
        <div className={styles.imgContainer4}>
          <p>Choose Your Own Roommate</p>
          {/* <img src={image4} alt="avalable home" /> */}
        </div>
      </div>
      <div className={styles.flexibleText}>
        <h2 className={styles.flexibleTexth2}>
          Flexibility and options to suit your lifestyle.
        </h2>
        <p className={styles.flexibleTextP}>
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
      </div>
    </div>
  );
};

export default Flexible;
