import React, { useEffect } from "react";
import styles from "./card.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Card = ({ image, address, status, price, bed, shower, size }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="visible"
      animate={control}
      className={styles.cards}
    >
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
    </motion.div>
  );
};

export default Card;
