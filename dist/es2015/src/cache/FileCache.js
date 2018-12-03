'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SDKCache2 = require('./SDKCache');

var _SDKCache3 = _interopRequireDefault(_SDKCache2);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileCache = function (_SDKCache) {
  _inherits(FileCache, _SDKCache);

  function FileCache() {
    _classCallCheck(this, FileCache);

    var _this = _possibleConstructorReturn(this, (FileCache.__proto__ || Object.getPrototypeOf(FileCache)).call(this));

    _this.dirName = 'tmp/';
    return _this;
  }

  _createClass(FileCache, [{
    key: 'exists',
    value: function exists(key) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var path = _this2.dirName + key;

        fs.exists(path, function (exists) {
          if (exists) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    }
  }, {
    key: 'isExpired',
    value: function isExpired(item) {
      var now = new Date();
      now = Math.round(now.getTime() / 1000);

      var createdAt = new Date(item.createdAt);
      createdAt = Math.round(createdAt.getTime() / 1000);

      var difference = now - createdAt;

      if (item.expires_in - 30 > difference) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      var item = value;
      Object.assign(item, { createdAt: new Date() });
      this.saveToFile(key, item);
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this.readFromFile(key).then(function (item) {
        return item;
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'saveToFile',
    value: function saveToFile(fileName, content) {
      var _this3 = this;

      fs.exists(this.dirName, function (exists) {
        if (!exists) {
          fs.mkdir(_this3.dirName, function (err) {
            if (err) console.log(err);
          });
        }

        var path = _this3.dirName + fileName;

        fs.writeFile(path, JSON.stringify(content), function (err) {
          if (err) console.log(err);
        });
      });
    }
  }, {
    key: 'readFromFile',
    value: function readFromFile(fileName) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var path = _this4.dirName + fileName;

        fs.exists(path, function (exists) {
          if (!exists) reject(new Error('File from ' + path + " doesn't exist!"));

          fs.readFile(path, function (err, item) {
            if (err) reject(new Error('Problem with reading file!'));

            item = JSON.parse(item);
            resolve(item);
          });
        });
      });
    }
  }]);

  return FileCache;
}(_SDKCache3.default);

exports.default = FileCache;