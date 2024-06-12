import React from "react";
import styles from "./index.module.css";
import { Container } from "@mui/material";
import TopBar from "../../components/TopBar";

export default function FinancialPlanner() {
  return (
    <>
      <Container maxWidth="sm" className={styles.container}>
        <TopBar center={"理财"} />
        <div className={styles.table}></div>
      </Container>
    </>
  );
}
