import React, { useEffect, useRef, useState } from 'react';
import styles from "./index.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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


// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// 设置样式
const getItemStyle = (isDragging, draggableStyle, y) => (isDragging ?
  {
    background: isDragging ? "lightgreen" : "#ffffff",
    ...draggableStyle,
    top: `${draggableStyle.top} !important`,
  } :
  {
    background: isDragging ? "lightgreen" : "#ffffff",
    ...draggableStyle,
  }
);

export default function ItemList({ list, del, toggleDone, changeList }) {
  const ul = useRef();
  const [showTip, setShowTip] = useState(false);
  const copy = (val) => () => {
    navigator.clipboard.writeText(val);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 1000);
  }

  /* 可拖拽配置 */
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      list,
      result.source.index,
      result.destination.index
    );

    changeList(items);
  }
  return (
    <>
      <List dense ref={ul} className={styles.list}>

        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {
                    list.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <ListItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            key={item.id}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                            )}
                            divider
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete" onClick={() => del(item.id)}>
                                <DeleteIcon color='error' />
                              </IconButton>
                            }
                            className={`${styles.item} ${item.done ? styles.done : ""}`}
                          >
                            <Checkbox className={item.done ? styles.done : ""} checked={!!item.done} onChange={() => toggleDone(item.id)} />
                            <ListItemText
                              primary={<span onClick={copy(item.val)}>{item.val}</span>}
                              secondary={item.deadline && `时间: ${dayjs(new Date(item.deadline)).format("YYYY-MM-DD HH:mm")}`}
                              className={styles.text}
                            />
                          </ListItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
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
