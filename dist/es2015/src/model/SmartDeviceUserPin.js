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
 * The SmartDeviceUserPin model module.
 * @module model/SmartDeviceUserPin
 */
var SmartDeviceUserPin = function () {
    /**
     * Constructs a new <code>SmartDeviceUserPin</code>.
     * @alias module:model/SmartDeviceUserPin
     * @class
     */

    function SmartDeviceUserPin() {
        _classCallCheck(this, SmartDeviceUserPin);

        this.user_pin = undefined;
    }

    /**
    * Constructs a <code>SmartDeviceUserPin</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDeviceUserPin} obj Optional instance to populate.
    * @return {module:model/SmartDeviceUserPin} The populated <code>SmartDeviceUserPin</code> instance.
    */


    _createClass(SmartDeviceUserPin, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDeviceUserPin();

                if (data.hasOwnProperty('user_pin')) {
                    obj['user_pin'] = _ApiClient2.default.convertToType(data['user_pin'], 'String');
                }
            }
            return obj;
        }

        /**
         * user code from authentication response
         * @member {String} user_pin
         */

    }]);

    return SmartDeviceUserPin;
}();

exports.default = SmartDeviceUserPin;