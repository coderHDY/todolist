import React from 'react';
import styles from "./index.module.css";

const TopBar = ({ left, children, right, center = children }) => {
  return (
    <div className={styles.topbar}>
      <div className={left && styles.left}>{left}</div>
      <div className={styles.center}>{center}</div>
      <div className={right && styles.right}>{right}</div>
    </div>
  );
}

export default TopBar;
