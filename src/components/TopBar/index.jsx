import React from 'react';
import styles from "./index.module.css";

const TopBar = ({ left, children, right, center = children }) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>{left}</div>
      {center && <div className={styles.center}>{center}</div>}
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
}

export default TopBar;
