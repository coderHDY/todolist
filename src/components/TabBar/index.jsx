import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import SavingsIcon from "@mui/icons-material/Savings";
import styles from "./index.module.css";

const routes = [
  {
    link: "/",
    label: "任务",
    icon: <PlaylistAddCheckIcon />,
  },
  {
    link: "/financialPlanner",
    label: "理财",
    icon: <SavingsIcon />,
  },
  // {
  //   link: "/me",
  //   label: "我",
  //   icon: <PersonIcon />,
  // },
];

export default function TabBar() {
  const currRoute = window.location.hash.split("#")[1] || "/";
  const [active, setActive] = useState(
    routes.find((item) => item.link === currRoute)?.link || "/"
  );
  const nav = useNavigate();
  const handleRouterClick = (item) => {
    if (item.link === active) {
      return;
    }
    setActive(item.link);
    nav(item.link, { replace: true });
  };
  return (
    <BottomNavigation value={active} showLabels className={styles.tabbar}>
      {routes.map((item) => (
        <BottomNavigationAction
          key={item.link}
          onClick={() => handleRouterClick(item)}
          label={item.label}
          value={item.link}
          icon={item.icon}
          className={styles.item}
        />
      ))}
    </BottomNavigation>
  );
}
