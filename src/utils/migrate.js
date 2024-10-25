import localforage from "localforage";
import { LIST, FINANCIAL } from "./constant";

// localStorage 迁移到localforage
export const migrate = async () => {
  const keys = [LIST, FINANCIAL];
  for (const key of keys) {
    let item = await localStorage.getItem(key);
    if (typeof item === "string") {
      try {
        item = JSON.parse(item);
      } catch (e) {
        item = null;
      }
    }
    if (item) {
      void localforage.setItem(key, item).then(() => {
        localStorage.removeItem(key);
      });
    }
  }
};
