import React, { useState, useEffect } from 'react'
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
import Loading from "../../components/Loading";

export default function TodoList() {
  const { list, add, del, toggleDone } = useList();
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <Container className={styles.container}>
      <Bar />
      {
        loading ? <Loading />
        : (
          <>
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
          </>
        )
      }
    </Container>
  )
}
