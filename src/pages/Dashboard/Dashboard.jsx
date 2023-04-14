import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import styles from "./Dashboard.module.css";

import DashboardHeader from "./Component/DashboardHeader/DashboardHeader";
import Footer from "../../components/Footer/Footer";

import userImage from "./assets/userImage.svg";

import { RiHome4Line } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { RiBubbleChartLine } from "react-icons/ri";

const Dashboard = () => {
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

  const sideBarContent = [
    {
      id: "menu1",
      icon: <RiHome4Line />,
      text: "Home",
    },
    {
      id: "menu2",
      icon: <HiOutlineEnvelope />,
      text: "Messages",
    },
    {
      id: "menu3",
      icon: <CiUser />,
      text: "Profile",
    },
    {
      id: "menu4",
      icon: <BsFilter />,
      text: "My Listings",
    },
    {
      id: "menu5",
      icon: <RiBubbleChartLine />,
      text: "My Experience",
    },
  ];

  function splitWords(words) {
    let n = words.split(" ");
    return n[n.length - 1];
  }

  return (
    <div className={styles.dashboard}>
      <DashboardHeader userName={name} email={user?.email} />

      <div className={styles.dashboardContainer}>
        <div className={styles.sideBar}>
          {sideBarContent.map((menu) => {
            return (
              <div className={styles.sideBarMenu} key={menu.id}>
                {menu.icon} <h4>{menu.text}</h4>
              </div>
            );
          })}
        </div>
        <div className={styles.dashboardBody}>
          <div className={styles.dashboardContentWrapper}>
            <img src={userImage} alt="user of the application" />
            <div>
              <p className={styles.greetings}>
                Welcome Landlord {splitWords(name)}{" "}
              </p>
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
        </div>

        {/* <h1>Welcome to the Dashboard</h1>
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button> */}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
