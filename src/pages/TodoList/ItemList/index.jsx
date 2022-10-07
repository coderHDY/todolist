import React from 'react';
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
  return (
    <List dense>
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
