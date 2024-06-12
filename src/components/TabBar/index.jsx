import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PersonIcon from "@mui/icons-material/Person";
import SavingsIcon from "@mui/icons-material/Savings";

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
  const [active, setActive] = useState(routes[0].link);
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
