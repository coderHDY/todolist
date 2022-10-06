export default class Storage {
  static get(key) {
    let item;
    try {
      item = JSON.parse(localStorage.getItem(key)) || "";
    } catch (e) {
      item = "";
    }
    return item;
  }
  static set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
}
