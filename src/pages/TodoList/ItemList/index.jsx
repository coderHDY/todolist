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
    // let textArea = document.createElement("textarea");
    // textArea.value = val;
    // // 使text area不在viewport，同时设置不可见
    // textArea.style.position = "fixed";
    // textArea.style.opacity = 0;
    // textArea.style.left = "-999999px";
    // textArea.style.top = "-999999px";
    // document.body.appendChild(textArea);
    // textArea.focus();
    // textArea.select();
    // return new Promise((res, rej) => {
    //   // 执行复制命令并移除文本框
    //   document.execCommand('copy') ? res() : rej();
    //   textArea.remove();
    // });
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
