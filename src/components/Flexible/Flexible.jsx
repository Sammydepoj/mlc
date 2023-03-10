import React, { useEffect } from "react";
import styles from "./flexible.module.css";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import image4 from "./Assets/image4.png";
import Button from "../Button/Button";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const Flexible = () => {
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
    <div className={styles.flexible}>
      <div className={styles.flexibleImages}>
        <div className={styles.mainImgContainer}>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="visible"
            animate={control}
            className={styles.imgContainer1}
          >
            <p>Flexible Leases</p>
            <img src={image1} alt="avalable home" />
          </motion.div>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="visible"
            animate={control}
            className={styles.imgContainer2}
          >
            <p>7-Day Happiness Guaranteed</p>
            <img src={image2} alt="avalable home" />
          </motion.div>
        </div>

        <div className={styles.mainImgContainer}>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="visible"
            animate={control}
            className={styles.imgContainer3}
          >
            <p>Monthly House Cleaning</p>
            <img src={image3} alt="avalable home" />
          </motion.div>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="visible"
            animate={control}
            className={styles.imgContainer4}
          >
            <p>Choose Your Own Roommate</p>
            <img src={image4} alt="avalable home" />
          </motion.div>
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
        <Button value={"Search Rooms"}></Button>
      </div>
    </div>
  );
};

export default Flexible;
