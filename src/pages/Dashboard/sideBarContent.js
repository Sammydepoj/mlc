import { RiHome4Line } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { RiBubbleChartLine } from "react-icons/ri";

import Home from "./Component/Home/Home";
import Listings from "./Component/Listings/Listings";

export const sideBarContent = [
  {
    id: "menu1",
    // icon: <RiHome4Line />,
    text: "Home",
    // component: <Home />,
  },
  {
    id: "menu2",
    // icon: <HiOutlineEnvelope />,
    text: "Messages",
  },
  {
    id: "menu3",
    // icon: <CiUser />,
    text: "Profile",
  },
  {
    id: "menu4",
    // icon: <BsFilter />,
    text: "My Listings",
    // component: <Listings />,
  },
  {
    id: "menu5",
    // icon: <RiBubbleChartLine />,
    text: "My Experience",
  },
];
