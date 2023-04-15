import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

import userImage from "../../assets/userImage.svg";

import { logout, auth, db } from "../../../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  function splitWords(words) {
    let n = words.split(" ");
    return n[n.length - 1];
  }

  return (
    <div className={styles.dashboardBody}>
      <div className={styles.dashboardContentWrapper}>
        <img src={userImage} alt="user of the application" />
        <div>
          <p className={styles.greetings}>Welcome {splitWords(name)} </p>
          <p className={styles.joinedDate}>Joined 2022</p>
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        <h3 className={styles.reviewsHeading}>
          Reviews <span>(3)</span>
        </h3>
        <div className={styles.reviewCardsContainer}>
          <div className={styles.reviewCards}>s</div>
          <div className={styles.reviewCards}>s</div>
          <div className={styles.reviewCards}>s</div>
        </div>
      </div>
      <button className="dashboard__btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default Home;
