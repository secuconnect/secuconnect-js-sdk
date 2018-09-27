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
* The SmartDevicesDTOSecubaseConfig model module.
* @module model/SmartDevicesDTOSecubaseConfig
*/
var SmartDevicesDTOSecubaseConfig = function () {
    /**
    * Constructs a new <code>SmartDevicesDTOSecubaseConfig</code>.
    * @alias module:model/SmartDevicesDTOSecubaseConfig
    * @class
    */

    function SmartDevicesDTOSecubaseConfig() {
        _classCallCheck(this, SmartDevicesDTOSecubaseConfig);

        this.secubaseVersion = undefined;
        this.baseVersion = undefined;
        this.oaiVersion = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesDTOSecubaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTOSecubaseConfig} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTOSecubaseConfig} The populated <code>SmartDevicesDTOSecubaseConfig</code> instance.
    */


    _createClass(SmartDevicesDTOSecubaseConfig, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesDTOSecubaseConfig();

                if (data.hasOwnProperty('secubaseVersion')) {
                    obj['secubaseVersion'] = _ApiClient2.default.convertToType(data['secubaseVersion'], 'String');
                }
                if (data.hasOwnProperty('baseVersion')) {
                    obj['baseVersion'] = _ApiClient2.default.convertToType(data['baseVersion'], 'String');
                }
                if (data.hasOwnProperty('oaiVersion')) {
                    obj['oaiVersion'] = _ApiClient2.default.convertToType(data['oaiVersion'], 'String');
                }
            }
            return obj;
        }

        /**
        * Secubase version
        * @member {String} secubaseVersion
        */

        /**
        * Base version
        * @member {String} baseVersion
        */

        /**
        * Oai version
        * @member {String} oaiVersion
        */

    }]);

    return SmartDevicesDTOSecubaseConfig;
}();

exports.default = SmartDevicesDTOSecubaseConfig;