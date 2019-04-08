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
 * The SmartDeviceProductsPrepaid model module.
 * @module model/SmartDeviceProductsPrepaid
 */
var SmartDeviceProductsPrepaid = function () {
    /**
     * Constructs a new <code>SmartDeviceProductsPrepaid</code>.
     * @alias module:model/SmartDeviceProductsPrepaid
     * @class
     */

    function SmartDeviceProductsPrepaid() {
        _classCallCheck(this, SmartDeviceProductsPrepaid);

        this.enabled = undefined;
        this.simulate_force = undefined;
        this.demo_force = undefined;
        this.vtc_tid = undefined;
    }

    /**
    * Constructs a <code>SmartDeviceProductsPrepaid</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDeviceProductsPrepaid} obj Optional instance to populate.
    * @return {module:model/SmartDeviceProductsPrepaid} The populated <code>SmartDeviceProductsPrepaid</code> instance.
    */


    _createClass(SmartDeviceProductsPrepaid, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDeviceProductsPrepaid();

                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
                if (data.hasOwnProperty('simulate_force')) {
                    obj['simulate_force'] = _ApiClient2.default.convertToType(data['simulate_force'], 'Boolean');
                }
                if (data.hasOwnProperty('demo_force')) {
                    obj['demo_force'] = _ApiClient2.default.convertToType(data['demo_force'], 'Boolean');
                }
                if (data.hasOwnProperty('vtc_tid')) {
                    obj['vtc_tid'] = _ApiClient2.default.convertToType(data['vtc_tid'], 'String');
                }
            }
            return obj;
        }

        /**
         * Enabled
         * @member {Boolean} enabled
         */


        /**
         * Simulate force
         * @member {Boolean} simulate_force
         */


        /**
         * Demo force
         * @member {Boolean} demo_force
         */


        /**
         * Vtc tid
         * @member {String} vtc_tid
         */

    }]);

    return SmartDeviceProductsPrepaid;
}();

exports.default = SmartDeviceProductsPrepaid;