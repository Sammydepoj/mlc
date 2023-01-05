import React from "react";
import styles from "./card.module.css";

const Card = ({ image, address, status, price, bed, shower, size }) => {
  return (
    <div className={styles.cards}>
      <img
        src={image}
        className={styles.homeImage}
        alt="properties locations and details"
      />

      <div className={styles.cardTexts}>
        <p className={styles.address}>{address}</p>
        <p className={styles.status}>{status}</p>
        <p className={styles.price}>{price}</p>
        <div className={styles.iconWrapper}>
          <div className={styles.iconsWithCount}>
            <img src={bed} alt="beds available" />
            <span>4</span>
          </div>
          <div className={styles.iconsWithCount}>
            <img src={shower} alt="showers available" />
            <span>2</span>
          </div>
          <div className={styles.iconsWithCount}>
            <img src={size} alt="home size" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
