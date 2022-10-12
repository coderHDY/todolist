import React, { useState } from 'react';
import styles from './index.module.css';

import {
  Add as AddIcon,
} from '@mui/icons-material';
import {
  Container,
  Fab,
  SwipeableDrawer,
} from '@mui/material';
import ItemList from './ItemList';
import AddForm from './AddForm';
import useList from '../../hooks/useList';
import Bar from "./Bar";
import Weather from './Weather';

export default function TodoList() {
  const { list, add, del, toggleDone } = useList();
  const [showAdd, setShowAdd] = useState(false);
  const [hide, setHide] = useState(true);
  return (
    <Container className={`${styles.container} ${hide ? styles.hide : ""}`}>
      <Bar />
      <Weather hide={hide} setHide={setHide} />
      <ItemList list={list} del={del} toggleDone={toggleDone} />
      <Fab color="primary" onClick={() => setShowAdd(true)} className={styles.fabIcon}>
        <AddIcon />
      </Fab>
      <SwipeableDrawer
        anchor="bottom"
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onOpen={() => setShowAdd(true)}
        className={styles.bottomDrawer}
      >
        <AddForm add={add} showAdd={showAdd} setShowAdd={setShowAdd} />
      </SwipeableDrawer>
    </Container>
  )
}
