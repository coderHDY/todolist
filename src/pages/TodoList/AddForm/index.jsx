import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

import { Add as AddIcon } from "@mui/icons-material";
import { List, TextField, Stack, Button } from "@mui/material";

export default function AddForm({
  add,
  showAdd,
  setShowAdd,
  modifyItem,
  onModify,
}) {
  const mode = modifyItem ? "modify" : "add";
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const addList = () => {
    add(name, +deadline > +new Date() ? +deadline : "");
    setShowAdd(false);
  };

  useEffect(() => {
    if (mode === "modify") {
      setName(modifyItem?.val ?? "");
    }
  }, [mode, modifyItem]);
  return (
    <List dense className={showAdd ? styles.jump : ""}>
      <Stack spacing={4} paddingX={2} paddingBottom={5} paddingTop={2}>
        <TextField
          label="事件"
          autoFocus
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {mode === "modify" ? (
          <Button variant="contained" onClick={() => onModify(name)}>
            <AddIcon />
            <span>确认</span>
          </Button>
        ) : (
          <Button variant="contained" onClick={addList}>
            <AddIcon />
            <span>添加</span>
          </Button>
        )}
      </Stack>
    </List>
  );
}
