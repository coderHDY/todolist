import React, { useEffect, useRef, useState } from 'react';
import styles from "./index.module.css";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Checkbox,
  Snackbar,
  Alert,
} from '@mui/material';

import {
  Delete as DeleteIcon,
} from '@mui/icons-material';
import dayjs from "dayjs";

export default function ItemList({ list, del, toggleDone }) {
  const ul = useRef();
  const [showTip, setShowTip] = useState(false);
  useEffect(() => {
    Array.prototype.forEach.call(ul.current.children, (item, idx) => setTimeout(() => item.classList.add(styles.active), idx * 40));
  }, []);
  const copy = (val) => () => {
    navigator.clipboard.writeText(val);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 1000);
  }
  return (
    <>
      <List dense ref={ul} className={styles.list}>
        {
          list.map(item => (
            <ListItem
              key={item.id}
              divider
              onClick={copy(item.val)}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => del(item.id)}>
                  <DeleteIcon color='error' />
                </IconButton>
              }
              className={`${styles.item} ${item.done ? styles.done : ""}`}
            >
              <Checkbox className={item.done ? styles.done : ""} checked={!!item.done} onChange={() => toggleDone(item.id)} />
              <ListItemText
                primary={item.val}
                secondary={item.deadline && `时间: ${dayjs(new Date(item.deadline)).format("YYYY-MM-DD HH:mm")}`}
                className={styles.text}
              />
            </ListItem>
          )
          )}
      </List>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showTip}
      >
        <Alert severity="success">复制成功</Alert>
      </Snackbar>
    </>
  )
}
