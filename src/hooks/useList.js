import { useState } from "react";
import Storage from "../utils/storage";
import { v4 } from "uuid";

const LIST = "list";

const useList = () => {
  const [list, setList] = useState(Storage.get(LIST) || []);
  const changeList = newList => {
    setList(newList);
    Storage.set(LIST, newList);
  }
  const add = (str, deadline = "") => {
    if (str.trim() === "") return;
    const newItem = {
      id: v4(),
      val: str,
      create: +new Date(),
      deadline,
      top: -1,
      done: 0,
    }
    changeList([newItem, ...list]);
  }
  const done = id => {
    const newList = list.map(item => item.id === id ? { ...item, done: 1 } : item);
    changeList(newList);
  };
  const del = id => {
    const newList = list.filter(item => item.id !== id);
    changeList(newList);
  };
  const modify = (id, val) => {
    const newList = list.map(item => item.id === id ? { ...item, val } : item)
    changeList(newList)
  };
  return {
    list,
    add,
    done,
    del,
    modify,
  }
}

export default useList;
