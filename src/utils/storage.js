import localforage from "localforage";
export default class Storage {
  static async get(key = "") {
    let item;
    try {
      item = await localforage.getItem(key);
    } catch (e) {
      item = null;
    }
    return item;
  }
  static async set(key, val) {
    try {
      await localforage.setItem(key, val);
    } catch (e) {
      console.error(e);
    }
  }
}
