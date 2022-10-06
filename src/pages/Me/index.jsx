import React from 'react';
import styles from './index.module.css';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <Container maxWidth="sm" className={styles.container}>
        Me
      </Container>
    </>
  )
}
