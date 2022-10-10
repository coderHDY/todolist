import React, { useEffect, useRef } from 'react';
import styles from "./index.module.css";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Checkbox,
} from '@mui/material';

import {
  Delete as DeleteIcon,
} from '@mui/icons-material';
import dayjs from "dayjs";

export default function ItemList({ list, del, toggleDone }) {
  const ul = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.classList.add(styles.active);
        observer.unobserve(e.target);
      }
    })
    Array.prototype.forEach.call(ul.current.children, (item, idx) => setTimeout(() => observer.observe(item), idx * 40));
  }, []);
  return (
    <List dense ref={ul} className={styles.list}>
      {
        list.map(item => (
          <ListItem
            key={item.id}
            divider
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => del(item.id)}>
                <DeleteIcon color='error' />
              </IconButton>
            }
            className={`${styles.item} ${item.done ? styles.done : ""}`}
          >
            <Checkbox className={item.done ? styles.done : ""} checked={item.done} onChange={() => toggleDone(item.id)} />
            <ListItemText
              primary={item.val}
              secondary={item.deadline && `时间: ${dayjs(new Date(item.deadline)).format("YYYY-MM-DD HH:mm")}`}
              className={styles.text}
            />
          </ListItem>
        )
        )}
    </List>
  )
}
