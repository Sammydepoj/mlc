import React from "react";
import styles from "./testimonial.module.css";
import testimg from "./assets/Ellipse 4.png";
import yt from "./assets/yt.png";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialText}>
        <p className={styles.testimonialTextParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <div className={styles.testifier}>
          <img src={testimg} alt="tetifier testifying" />
          <div className={styles.testifierNameContainer}>
            <p className={styles.testifierName}>Harry Wilson</p>
            <p className={styles.testifierRole}>Property Owner</p>
          </div>
        </div>
      </div>
      <div className={styles.testimonialVideo}>
        {/* <img src={yt} alt="youtube player" /> */}
        <YoutubeEmbed embedId="JU6sl_yyZqs" />
      </div>
    </div>
  );
};

export default Testimonial;
