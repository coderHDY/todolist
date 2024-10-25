import { useEffect, useState } from "react";
import Storage from "../utils/storage";
import { v4 } from "uuid";
import { LIST } from "../utils/constant";


const useList = () => {
  const [list, setList] = useState([]);
  const initList = async () => {
    const list = await Storage.get(LIST);
    if (list) {
      setList(list);
    }
  };
  useEffect(() => {
    initList();
  }, []);
  const changeList = (newList) => {
    setList(newList);
    Storage.set(LIST, newList);
  };
  const add = (str, deadline = "") => {
    if (str.trim() === "") return;
    const newItem = {
      id: v4(),
      val: str,
      create: +new Date(),
      deadline,
      top: -1,
      done: false,
    };
    changeList([newItem, ...list]);
  };
  const toggleDone = (id) => {
    let idx;
    const newList = list.map((item, i) => {
      if (item.id === id) {
        idx = i;
        const newItem = { ...item, done: !item.done };
        return newItem;
      } else {
        return item;
      }
    });
    const [item] = newList.splice(idx, 1);
    if (item.done) {
      newList.push(item);
    } else {
      newList.unshift(item);
    }
    changeList(newList);
  };
  const del = (id) => {
    const newList = list.filter((item) => item.id !== id);
    changeList(newList);
  };
  const modify = (id, val) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, val } : item
    );
    changeList(newList);
  };
  return {
    list,
    add,
    toggleDone,
    del,
    modify,
    changeList,
  };
};

export default useList;
