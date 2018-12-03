"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SDKCache = function () {
  function SDKCache() {
    _classCallCheck(this, SDKCache);
  }

  /**
   * This function checks whether key exists.
   * If key exists returns true in other case returns false.
   *
   * @param key
   * @returns {boolean}
   */


  _createClass(SDKCache, [{
    key: "exists",
    value: function exists(key) {
      return false;
    }

    /**
     * This function checks whether item is expired.
     * If item is expired returns true in other case returns false.
     *
     * @returns {boolean}
     */

  }, {
    key: "isExpired",
    value: function isExpired(item) {
      return false;
    }

    /**
     * This function returns cache item.
     *
     * @param key
     */

  }, {
    key: "getItem",
    value: function getItem(key) {}

    /**
     * This function sets cache item.
     *
     * @param key
     * @param value
     */

  }, {
    key: "setItem",
    value: function setItem(key, value) {}
  }]);

  return SDKCache;
}();

exports.default = SDKCache;