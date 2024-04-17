import React, { useState } from 'react';
import styles from "./index.module.css";
import dayjs from "dayjs";

import {
  Add as AddIcon,
} from '@mui/icons-material';
import bgLocale from 'date-fns/locale/bg';
import {
  List,
  TextField,
  Stack,
  Button,
} from '@mui/material';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function AddForm({ add, showAdd, setShowAdd }) {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const handleDateChange = (v) => setDeadline(dayjs(v));
  const addList = () => {
    add(name, +deadline > +new Date() ? +deadline : "");
    setShowAdd(false);
  }
  return (
    <List dense className={showAdd ? styles.jump : ""}>
      <Stack spacing={3} padding={2}>

        <TextField label="事件" autoFocus variant="standard" fullWidth value={name} onChange={e => setName(e.target.value)} />
        {/* <LocalizationProvider adapterLocale={bgLocale} dateAdapter={AdapterDayjs}>
          <DateTimePicker
            displayStaticWrapperAs="mobile"
            label="截止日期"
            value={deadline}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
        <Button variant="contained" onClick={addList}>
          <AddIcon />
          <span>添加</span>
        </Button>
      </Stack>
    </List>
  )
}
