import React from "react";
import Contact from "../../components/Contact/Contact";
import Flexible from "../../components/Flexible/Flexible";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import MinimumLivingCost from "../../components/MinimumLivingCost/MinimumLivingCost";
import Testimonial from "../../components/Testimonial/Testimonial";
import styles from "./homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <MinimumLivingCost />
      <List />
      <Flexible />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Homepage;