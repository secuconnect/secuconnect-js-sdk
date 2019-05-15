'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartDevicesSecubaseConfigLogging = require('./SmartDevicesSecubaseConfigLogging');

var _SmartDevicesSecubaseConfigLogging2 = _interopRequireDefault(_SmartDevicesSecubaseConfigLogging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartDevicesSecubaseConfig model module.
 * @module model/SmartDevicesSecubaseConfig
 */
var SmartDevicesSecubaseConfig = function () {
    /**
     * Constructs a new <code>SmartDevicesSecubaseConfig</code>.
     * @alias module:model/SmartDevicesSecubaseConfig
     * @class
     */

    function SmartDevicesSecubaseConfig() {
        _classCallCheck(this, SmartDevicesSecubaseConfig);

        this.apps = undefined;
        this.logging = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfig} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfig} The populated <code>SmartDevicesSecubaseConfig</code> instance.
    */


    _createClass(SmartDevicesSecubaseConfig, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesSecubaseConfig();

                if (data.hasOwnProperty('apps')) {
                    obj['apps'] = _ApiClient2.default.convertToType(data['apps'], ['String']);
                }
                if (data.hasOwnProperty('logging')) {
                    obj['logging'] = _SmartDevicesSecubaseConfigLogging2.default.constructFromObject(data['logging']);
                }
            }
            return obj;
        }

        /**
         * Apps
         * @member {Array.<String>} apps
         */


        /**
         * Logging
         * @member {module:model/SmartDevicesSecubaseConfigLogging} logging
         */

    }]);

    return SmartDevicesSecubaseConfig;
}();

exports.default = SmartDevicesSecubaseConfig;