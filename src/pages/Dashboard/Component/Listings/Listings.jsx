import React, { useState } from "react";
import styles from "./Listings.module.css";

import ListYourSpace from "./Components/ListYourSpace/ListYourSpace";
import Description from "./Components/Description/Description";
import Location from "./Components/Location/Location";

const Listings = () => {
  const showNextSection = () => {
    setShowSection(components[2]);
  };

  const showPrevSection = () => {
    setShowSection(components[0]);
  };

  const sectionToggleHandler = () => {
    setShowSection(components[1]);
  };

  const components = [
    <ListYourSpace onClick={sectionToggleHandler} />,
    <Description
      prevSectionHandler={showPrevSection}
      nextSectionHandler={showNextSection}
    />,
    <Location />,
  ];

  const [showSection, setShowSection] = useState(components[0]);

  return (
    <div className={styles.listings}>
      <div className={styles.listYourSpace}>
        <div>
          <h2>
            List Your <span>Space</span>
          </h2>
          <p>Be rest assured we help you make money renting out your space</p>
        </div>
      </div>
      {showSection}
    </div>
  );
};

export default Listings;
