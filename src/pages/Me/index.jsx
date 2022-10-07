import React from 'react';
import styles from './index.module.css';
import { Container } from '@mui/material';
import TopBar from "../../components/TopBar";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm" className={styles.container}>
        <TopBar center={"我的"} />
      </Container>
    </>
  )
}
