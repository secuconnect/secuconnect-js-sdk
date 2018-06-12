
export default class SDKCache {

  constructor() {}

  /**
   * This function checks whether key exists.
   * If key exists and isn't expire, then returns true in other case returns false.
   *
   * @param key
   * @returns {boolean}
   */
  exists(key) { return false;}

  /**
   * This function returns cache item.
   *
   * @param key
   */
  getItem(key) {}

  /**
   * This function sets cache item.
   *
   * @param key
   * @param value
   */
  setItem(key, value) {}
}
