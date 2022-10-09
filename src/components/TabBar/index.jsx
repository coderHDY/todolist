import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PersonIcon from "@mui/icons-material/Person";

const routes = [
  {
    link: "/todolist",
    label: "List",
    icon: <PlaylistAddCheckIcon />,
  },
  {
    link: "/me",
    label: "Me",
    icon: <PersonIcon />,
  },
];

export default function TabBar() {
  const [active, setActive] = useState(routes[0].link);
  const nav = useNavigate();
  const handleRouterClick = (item) => {
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
