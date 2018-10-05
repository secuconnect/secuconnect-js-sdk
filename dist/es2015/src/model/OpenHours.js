'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _DayTime = require('./DayTime');

var _DayTime2 = _interopRequireDefault(_DayTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The OpenHours model module.
* @module model/OpenHours
*/
var OpenHours = function () {
    /**
    * Constructs a new <code>OpenHours</code>.
    * Open hours
    * @alias module:model/OpenHours
    * @class
    */

    function OpenHours() {
        _classCallCheck(this, OpenHours);

        this.open = undefined;
        this.close = undefined;
    }

    /**
    * Constructs a <code>OpenHours</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OpenHours} obj Optional instance to populate.
    * @return {module:model/OpenHours} The populated <code>OpenHours</code> instance.
    */


    _createClass(OpenHours, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OpenHours();

                if (data.hasOwnProperty('open')) {
                    obj['open'] = _DayTime2.default.constructFromObject(data['open']);
                }
                if (data.hasOwnProperty('close')) {
                    obj['close'] = _DayTime2.default.constructFromObject(data['close']);
                }
            }
            return obj;
        }

        /**
        * Open
        * @member {module:model/DayTime} open
        */

        /**
        * Close
        * @member {module:model/DayTime} close
        */

    }]);

    return OpenHours;
}();

exports.default = OpenHours;