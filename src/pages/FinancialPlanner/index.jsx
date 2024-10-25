import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";
import { Container } from "@mui/material";
import TopBar from "../../components/TopBar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import {
  List,
  ListItem,
  ListItemText,
  Fab,
  SwipeableDrawer,
  Stack,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { FINANCIAL } from "../../utils/constant";
import Storage from "../../utils/storage";

// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// 设置样式
const getItemStyle = (isDragging, draggableStyle, y) => ({
  background: isDragging ? "lightgreen" : "#ffffff",
  ...draggableStyle,
});

const formatFinancialList = (list) => {
  let total = 0;
  const newList = list.map((item) => {
    const isIn = item.type === "in";
    total += isIn ? +item.amount : -item.amount;
    return {
      ...item,
      total,
    };
  });
  return newList;
};

export default function FinancialPlanner() {
  const ul = useRef();
  const [list, setList] = useState([]);
  const initList = async () => {
    const financialList = (await Storage.get(FINANCIAL)) || [
      {
        id: v4(),
        event: "当前存款",
        amount: 1000,
        type: "in",
      },
      {
        id: v4(),
        event: "五月剩余",
        amount: 6000,
        type: "in",
      },
      {
        id: v4(),
        event: "9月奖金",
        amount: 8000,
        type: "in",
      },
    ];
    setList(formatFinancialList(financialList));
  };
  useEffect(() => {
    initList();
  }, []);

  const changeList = (items) => {
    Storage.set(FINANCIAL, items);
    setList(formatFinancialList(items));
  };
  const handleModify = (item) => {
    setMode("modify");
    setEditItem({ ...item });
    setOpenModal(true);
  };

  /* 可拖拽配置 */
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(list, result.source.index, result.destination.index);

    changeList(items);
  };

  // modal
  const [mode, setMode] = useState("add"); // add modify
  const [openModal, setOpenModal] = useState(false);
  const [editItem, setEditItem] = useState({
    id: v4(),
    event: "",
    amount: "",
    type: "in",
  });
  const closeDrawer = () => {
    setEditItem({
      id: v4(),
      event: "",
      amount: "",
      type: "in",
    });
    setOpenModal(false);
  };
  const onTypeChange = (e) => {
    setEditItem({
      ...editItem,
      type: e.target.value,
    });
  };
  const setName = (val) => {
    setEditItem({
      ...editItem,
      event: val,
    });
  };
  const setAmount = (val) => {
    setEditItem({
      ...editItem,
      amount: val,
    });
  };
  const addList = () => {
    const newList = [...list, editItem];
    changeList(newList);
    closeDrawer();
  };
  const onModifyEventOk = () => {
    const newList = list.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    changeList(newList);
    closeDrawer();
  };
  const del = (id) => {
    const newList = list.filter((item) => item.id !== id);
    changeList(newList);
    closeDrawer();
  };
  return (
    <>
      <Container maxWidth="sm" className={styles.container}>
        <TopBar center={"理财"} />
        <div className={styles.table}>
          <List dense ref={ul} className={styles.list}>
            <DragDropContext onDragEnd={onDragEnd}>
              <div>
                <Droppable droppableId="droppable2">
                  {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {list.map((item, index) => {
                        const isIn = item.type === "in";
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <ListItem
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => handleModify(item)}
                                key={item.id}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                                divider
                                secondaryAction={
                                  <ListItemText
                                    secondary={item.total}
                                    className={styles.text}
                                  />
                                }
                                className={styles.item}
                              >
                                <ListItemText
                                  primary={
                                    <span className={styles.event}>
                                      {item.event}
                                    </span>
                                  }
                                  secondary={
                                    <span
                                      className={isIn ? styles.in : styles.out}
                                    >{`${isIn ? "+" : "-"}${
                                      item.amount
                                    }`}</span>
                                  }
                                  className={styles.text}
                                />
                              </ListItem>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </List>
        </div>

        <Fab
          color="primary"
          onClick={() => {
            setMode("add");
            setOpenModal(true);
          }}
          className={styles.fabIcon}
        >
          <AddIcon />
        </Fab>

        {/* 添加 modal */}
        <SwipeableDrawer
          anchor="bottom"
          open={openModal}
          onClose={closeDrawer}
          onOpen={() => setOpenModal(true)}
          className={styles.bottomDrawer}
        >
          <List dense className={openModal ? styles.jump : ""}>
            <Stack spacing={2} paddingX={2} paddingBottom={3} paddingTop={2}>
              <RadioGroup
                row
                value={editItem.type}
                onChange={onTypeChange}
                name="radio-buttons-group"
              >
                <FormControlLabel value="in" control={<Radio />} label="收入" />
                <FormControlLabel
                  value="out"
                  control={<Radio />}
                  label="支出"
                />
              </RadioGroup>
              <TextField
                id="event_name"
                label="事件"
                variant="standard"
                fullWidth
                value={editItem.event}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="event_amount"
                type="number"
                label="金额"
                variant="standard"
                fullWidth
                value={editItem.amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              {mode === "modify" ? (
                <>
                  <Button variant="contained" onClick={onModifyEventOk}>
                    <span>确认</span>
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => del(editItem.id)}
                  >
                    <span>删除</span>
                  </Button>
                </>
              ) : (
                <Button variant="contained" onClick={addList}>
                  <AddIcon />
                  <span>添加</span>
                </Button>
              )}
            </Stack>
          </List>
        </SwipeableDrawer>
      </Container>
    </>
  );
}
