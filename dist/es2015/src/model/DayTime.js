'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The DayTime model module.
 * @module model/DayTime
 */
var DayTime = function () {
    /**
     * Constructs a new <code>DayTime</code>.
     * Day and time
     * @alias module:model/DayTime
     * @class
     */

    function DayTime() {
        _classCallCheck(this, DayTime);

        this.day = undefined;
        this.time = undefined;
    }

    /**
    * Constructs a <code>DayTime</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DayTime} obj Optional instance to populate.
    * @return {module:model/DayTime} The populated <code>DayTime</code> instance.
    */


    _createClass(DayTime, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new DayTime();

                if (data.hasOwnProperty('day')) {
                    obj['day'] = _ApiClient2.default.convertToType(data['day'], 'Number');
                }
                if (data.hasOwnProperty('time')) {
                    obj['time'] = _ApiClient2.default.convertToType(data['time'], 'String');
                }
            }
            return obj;
        }

        /**
         * Day
         * @member {Number} day
         */


        /**
         * Time
         * @member {String} time
         */

    }]);

    return DayTime;
}();

exports.default = DayTime;