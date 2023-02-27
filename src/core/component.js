import { validateDataKey } from "../utils/validation.js";

export default class Component {
  constructor() {
    if (new.target === Component) {
      throw new TypeError("Cannot construct abstract instances directly");
    }
    this.data = {};
  }

  setData(key, value) {
    validateDataKey(key);
    this.#dataAlreadyAdded(key);
    this.data[key] = value;
    return this;
  }

  getData(key) {
    validateDataKey(key);
    this.#dataNotFound(key);
    return this.data[key];
  }

  deleteData(key) {
    validateDataKey(key);
    this.#dataNotFound(key);
    delete this.data[key];
    return this;
  }

  hasData(key) {
    validateDataKey(key);
    return Object.prototype.hasOwnProperty.call(this.data, key);
  }

  getAllData() {
    return this.data;
  }

  #dataAlreadyAdded(key) {
    if (this.hasData(key)) {
      throw new Error(`Data with key ${key} already added`);
    }
  }

  #dataNotFound(key) {
    if (!this.hasData(key)) {
      throw new Error(`Data with key ${key} not found`);
    }
  }
}
