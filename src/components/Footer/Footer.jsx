import React from "react";
import styles from "./footer.module.css";
import facebook from "./assets/Facebook.png";
import fax from "./assets/fax.png";
import GooglePlus from "./assets/GooglePlus.png";
import Instagram from "./assets/Instagram.png";
import LinkedIn from "./assets/LinkedIn.png";
import location from "./assets/location.png";
import Path from "./assets/Path.png";
import Pinterest from "./assets/Pinterest.png";
import Twitter from "./assets/Twitter.png";
import Youtube from "./assets/Youtube.png";
import RSS from "./assets/RSS.png";
import logo from "../NavbarAndLogo/assets/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.line} />
      <div className={styles.footerLogoAndSocials}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="minimum living cost logo" />
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.location}>
            <img src={location} alt="location-icon" />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className={styles.faxAndTelephone}>
            <span className={styles.Telephone}>
              <img src={Path} alt="location-icon" />
              <span>(123) 456-7890</span>
            </span>
            <span className={styles.fax}>
              <img src={fax} alt="location-icon" />
              <span>(123) 456-7890</span>
            </span>
          </div>
          <div className={styles.socials}>
            <span>Social Media</span>
            <img src={facebook} alt="location-icon" />
            <img src={Twitter} alt="location-icon" />
            <img src={LinkedIn} alt="location-icon" />
            <img src={Youtube} alt="location-icon" />
            <img src={Instagram} alt="location-icon" />
            <img src={GooglePlus} alt="location-icon" />
            <img src={Pinterest} alt="location-icon" />
            <img src={RSS} alt="location-icon" />
          </div>
        </div>
      </div>
      <div className={styles.footerNavAndCopyright}>
        <div className={styles.footerNav}>
          <span>About us</span>
          <span>Contact us</span>
          <span>Help us</span>
          <span>Privacy Policy</span>
          <span>Disclaimer</span>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 Minimumlivingcost. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
