import React from "react";
import { Container } from "@mui/material";
import TopBar from "../../components/TopBar";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm" className={styles.container}>
        <TopBar center={"我的"} />
      </Container>
    </>
  );
}
