import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import styles from "./Dashboard.module.css";

// import {sideBarContent} from "./sideBarContent.js";

import DashboardHeader from "./Component/DashboardHeader/DashboardHeader";
import Footer from "../../components/Footer/Footer";
import Home from "../Dashboard/Component/Home/Home";
import Listings from "./Component/Listings/Listings";

import { RiHome4Line } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { RiBubbleChartLine } from "react-icons/ri";

const Dashboard = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [dashboardBodyContent, setDashboardBodyContent] = useState(<Home />);

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
      component: <Home />,
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
      component: <Listings />,
    },
    {
      id: "menu5",
      icon: <RiBubbleChartLine />,
      text: "My Experience",
    },
  ];
  return (
    <div className={styles.dashboard}>
      <DashboardHeader userName={name} email={user?.email} />

      <div className={styles.dashboardContainer}>
        <button
          className={styles.harmburger}
          onClick={() => {
            setIsSideBarExpanded(!isSideBarExpanded);
            // console.log("clicked");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={
            isSideBarExpanded
              ? `${styles.sideBarContentContainer} ${styles.visible}`
              : styles.sideBarContentContainer
          }
        >
          <div className={styles.sideBar}>
            {sideBarContent.map((menu) => {
              return (
                <div
                  className={styles.sideBarMenu}
                  key={menu.id}
                  onClick={() => {
                    setDashboardBodyContent(menu.component);
                  }}
                >
                  {menu.icon} <h4>{menu.text}</h4>
                </div>
              );
            })}
          </div>
        </div>
        {dashboardBodyContent}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
