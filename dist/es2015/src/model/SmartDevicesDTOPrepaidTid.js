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
 * The SmartDevicesDTOPrepaidTid model module.
 * @module model/SmartDevicesDTOPrepaidTid
 */
var SmartDevicesDTOPrepaidTid = function () {
    /**
     * Constructs a new <code>SmartDevicesDTOPrepaidTid</code>.
     * @alias module:model/SmartDevicesDTOPrepaidTid
     * @class
     */

    function SmartDevicesDTOPrepaidTid() {
        _classCallCheck(this, SmartDevicesDTOPrepaidTid);

        this.tid = undefined;
        this.force = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesDTOPrepaidTid</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTOPrepaidTid} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTOPrepaidTid} The populated <code>SmartDevicesDTOPrepaidTid</code> instance.
    */


    _createClass(SmartDevicesDTOPrepaidTid, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesDTOPrepaidTid();

                if (data.hasOwnProperty('tid')) {
                    obj['tid'] = _ApiClient2.default.convertToType(data['tid'], 'String');
                }
                if (data.hasOwnProperty('force')) {
                    obj['force'] = _ApiClient2.default.convertToType(data['force'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Tid
         * @member {String} tid
         */


        /**
         * Force
         * @member {Boolean} force
         */

    }]);

    return SmartDevicesDTOPrepaidTid;
}();

exports.default = SmartDevicesDTOPrepaidTid;