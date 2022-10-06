import React, { useState } from 'react'
import styles from './index.module.css';
import dayjs from "dayjs";

import {
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import bgLocale from 'date-fns/locale/bg';
import {
  Container,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Skeleton,
  Fab,
  SwipeableDrawer,
  TextField,
  Stack,
  Button,
} from '@mui/material';
import useList from '../../hooks/useList';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const LoadingFrame = (
  <>
    <Skeleton animation="wave" sx={{ fontSize: '1rem', margin: "1rem 0" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rectangular" width={210} height={60} />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
    <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
  </>
)

export default function TodoList() {
  const { list, add, del } = useList();
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const handleDateChange = (v) => setDeadline(dayjs(v));
  const addList = () => {
    add(name, +deadline > +new Date() ? +deadline : "");
    setShowAdd(false);
  }
  return (
    <Container className={styles.container}>
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
            >
              <ListItemText
                primary={item.val}
                secondary={item.deadline && `时间: ${dayjs(new Date(item.deadline)).format("YYYY-MM-DD HH:mm")}`}
              />
            </ListItem>
          )
          )}
      </List>
      <Fab color="primary" onClick={() => setShowAdd(true)} className={styles.fabIcon}>
        <AddIcon />
      </Fab>
      <SwipeableDrawer
        anchor="bottom"
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onOpen={() => setShowAdd(true)}
      >
        <List dense>
          <Stack spacing={3} padding={2}>

            <TextField label="事件" variant="standard" fullWidth value={name} onChange={e => setName(e.target.value)} />
            <LocalizationProvider adapterLocale={bgLocale} dateAdapter={AdapterDayjs}>
              <DateTimePicker
                displayStaticWrapperAs="mobile"
                label="截止日期"
                value={deadline}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" color="success" onClick={addList}>
              <AddIcon />
              <span>添加</span>
            </Button>
          </Stack>
        </List>
      </SwipeableDrawer>
    </Container>
  )
}
