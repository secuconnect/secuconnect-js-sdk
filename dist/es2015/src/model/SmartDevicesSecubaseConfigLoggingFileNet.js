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
 * The SmartDevicesSecubaseConfigLoggingFileNet model module.
 * @module model/SmartDevicesSecubaseConfigLoggingFileNet
 */
var SmartDevicesSecubaseConfigLoggingFileNet = function () {
    /**
     * Constructs a new <code>SmartDevicesSecubaseConfigLoggingFileNet</code>.
     * @alias module:model/SmartDevicesSecubaseConfigLoggingFileNet
     * @class
     */

    function SmartDevicesSecubaseConfigLoggingFileNet() {
        _classCallCheck(this, SmartDevicesSecubaseConfigLoggingFileNet);

        this.file = undefined;
        this.net = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfigLoggingFileNet</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfigLoggingFileNet} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfigLoggingFileNet} The populated <code>SmartDevicesSecubaseConfigLoggingFileNet</code> instance.
    */


    _createClass(SmartDevicesSecubaseConfigLoggingFileNet, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesSecubaseConfigLoggingFileNet();

                if (data.hasOwnProperty('file')) {
                    obj['file'] = _ApiClient2.default.convertToType(data['file'], ['String']);
                }
                if (data.hasOwnProperty('net')) {
                    obj['net'] = _ApiClient2.default.convertToType(data['net'], ['String']);
                }
            }
            return obj;
        }

        /**
         * File
         * @member {Array.<String>} file
         */


        /**
         * Net
         * @member {Array.<String>} net
         */

    }]);

    return SmartDevicesSecubaseConfigLoggingFileNet;
}();

exports.default = SmartDevicesSecubaseConfigLoggingFileNet;