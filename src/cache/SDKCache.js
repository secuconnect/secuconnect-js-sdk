
export default class SDKCache {

  constructor() {}

  /**
   * This function checks whether key exists.
   * If key exists returns true in other case returns false.
   *
   * @param key
   * @returns {boolean}
   */
  exists(key) { return false;}

  /**
   * This function checks whether item is expired.
   * If item is expired returns true in other case returns false.
   *
   * @returns {boolean}
   */
  isExpired(item) { return false; }

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
