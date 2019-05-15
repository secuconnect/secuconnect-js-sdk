'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartDevicesSecubaseConfigLoggingFileNet = require('./SmartDevicesSecubaseConfigLoggingFileNet');

var _SmartDevicesSecubaseConfigLoggingFileNet2 = _interopRequireDefault(_SmartDevicesSecubaseConfigLoggingFileNet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartDevicesSecubaseConfigLogging model module.
 * @module model/SmartDevicesSecubaseConfigLogging
 */
var SmartDevicesSecubaseConfigLogging = function () {
    /**
     * Constructs a new <code>SmartDevicesSecubaseConfigLogging</code>.
     * @alias module:model/SmartDevicesSecubaseConfigLogging
     * @class
     */

    function SmartDevicesSecubaseConfigLogging() {
        _classCallCheck(this, SmartDevicesSecubaseConfigLogging);

        this.secubase = undefined;
        this.app = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfigLogging</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfigLogging} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfigLogging} The populated <code>SmartDevicesSecubaseConfigLogging</code> instance.
    */


    _createClass(SmartDevicesSecubaseConfigLogging, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesSecubaseConfigLogging();

                if (data.hasOwnProperty('secubase')) {
                    obj['secubase'] = _SmartDevicesSecubaseConfigLoggingFileNet2.default.constructFromObject(data['secubase']);
                }
                if (data.hasOwnProperty('app')) {
                    obj['app'] = _SmartDevicesSecubaseConfigLoggingFileNet2.default.constructFromObject(data['app']);
                }
            }
            return obj;
        }

        /**
         * Secubase
         * @member {module:model/SmartDevicesSecubaseConfigLoggingFileNet} secubase
         */


        /**
         * App
         * @member {module:model/SmartDevicesSecubaseConfigLoggingFileNet} app
         */

    }]);

    return SmartDevicesSecubaseConfigLogging;
}();

exports.default = SmartDevicesSecubaseConfigLogging;