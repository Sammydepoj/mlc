import React, { Component } from "react";
import styles from "./faetures.module.css";
import frame1 from "./assets/logo1.svg";
import frame2 from "./assets/logo2.svg";
import frame3 from "./assets/logo3.svg";
import frame4 from "./assets/logo4.svg";
import frame5 from "./assets/logo5.svg";
import frame6 from "./assets/logo6.svg";

import { motion, useAnimation } from "framer-motion";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      featureComponent: [
        {
          img: frame1,
          id: "img1",
          text: "Pay As little As Possible !",
        },
        {
          img: frame2,
          id: "img2",
          text: "Enjoy wisdom of Community !",
        },
        {
          img: frame3,
          id: "img3",
          text: "Let somebody else take care of Landlord!",
        },
        {
          img: frame4,
          id: "img4",
          text: "Enjoy peaceful Environment!",
        },
        {
          img: frame5,
          id: "img5",
          text: "Stay Safe! Save Money!",
        },
        {
          img: frame6,
          id: "img6",
          text: "Pay for what you use !",
        },
      ],
      isMounted: false,
    };
  }
  componentDidMount() {
    try {
      this.setState({ isMounted: true });
    } catch (error) {
      console.error("Error mounting component:", error);
    }
  }
  render() {
    const { isMounted } = this.state;
    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0, scale: 0 },
    };
    return (
      <div className={styles.features}>
        {this.state.featureComponent.map((component) => (
          <motion.div
            variants={boxVariant}
            animate={isMounted ? "visible" : "hidden"}
            className={styles.featureItem}
            key={component.id}
          >
            <div className={styles.imgContainer}>
              <img src={component.img} alt="features of mlc" />
            </div>
            <p className={styles.featuresText}>{component.text}</p>
          </motion.div>
        ))}
      </div>
    );
  }
}

export default Features;
