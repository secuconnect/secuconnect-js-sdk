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
* The SmartDevicesDevice model module.
* @module model/SmartDevicesDevice
*/
var SmartDevicesDevice = function () {
    /**
    * Constructs a new <code>SmartDevicesDevice</code>.
    * @alias module:model/SmartDevicesDevice
    * @class
    */

    function SmartDevicesDevice() {
        _classCallCheck(this, SmartDevicesDevice);

        this.object = undefined;
        this.id = undefined;
        this.serial_number = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesDevice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDevice} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDevice} The populated <code>SmartDevicesDevice</code> instance.
    */


    _createClass(SmartDevicesDevice, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesDevice();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('serial_number')) {
                    obj['serial_number'] = _ApiClient2.default.convertToType(data['serial_number'], 'String');
                }
            }
            return obj;
        }

        /**
        * Object of device
        * @member {String} object
        */

        /**
        * Id of device
        * @member {String} id
        */

        /**
        * Serial number
        * @member {String} serial_number
        */

    }]);

    return SmartDevicesDevice;
}();

exports.default = SmartDevicesDevice;