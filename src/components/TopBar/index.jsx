import React from 'react';
import styles from "./index.module.css";
import {
  AppBar
} from '@mui/material';

const TopBar = ({ left, children, right, center = children }) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0 }} className={styles.topbar}>
      <div className={left && styles.left}>{left}</div>
      <div className={styles.center}>{center}</div>
      <div className={right && styles.right}>{right}</div>
    </AppBar>
  );
}

export default TopBar;
