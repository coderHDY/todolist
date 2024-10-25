import React, { useState } from "react";

import { Add as AddIcon } from "@mui/icons-material";
import { Container, Fab, SwipeableDrawer } from "@mui/material";
import useList from "../../hooks/useList";
import styles from "./index.module.css";
import ItemList from "./ItemList";
import AddForm from "./AddForm";
import Bar from "./Bar";
import Weather from "./Weather";

export default function TodoList() {
  const { list, add, del, toggleDone, modify, changeList } = useList();
  const [showAdd, setShowAdd] = useState(false);
  const [modifyItem, setModifyItem] = useState();
  const [hide, setHide] = useState(true);
  const handleModifyStart = (item) => {
    setModifyItem(item);
    setShowAdd(true);
  };
  const handleModifyOk = (val) => {
    modify(modifyItem.id, val);
    closeDrawer();
  };
  const closeDrawer = () => {
    setShowAdd(false);
    setModifyItem(undefined);
  };

  return (
    <Container className={`${styles.container} ${hide ? styles.hide : ""}`}>
      <Bar />
      <Weather hide={hide} setHide={setHide} />
      <div
        className={styles["list-container"]}
        onClick={() => setHide(true)}
        onTouchStart={() => setHide(true)}
      >
        <ItemList
          changeList={changeList}
          list={list}
          del={del}
          handleModify={handleModifyStart}
          toggleDone={toggleDone}
        />
      </div>
      <Fab
        color="primary"
        onClick={() => setShowAdd(true)}
        className={styles.fabIcon}
      >
        <AddIcon />
      </Fab>
      <SwipeableDrawer
        anchor="bottom"
        open={showAdd}
        onClose={closeDrawer}
        onOpen={() => setShowAdd(true)}
        className={styles.bottomDrawer}
      >
        <AddForm
          add={add}
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          modifyItem={modifyItem}
          onModify={handleModifyOk}
        />
      </SwipeableDrawer>
    </Container>
  );
}
