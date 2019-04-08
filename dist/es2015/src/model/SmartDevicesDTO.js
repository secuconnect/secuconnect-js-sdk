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
 * The SmartDevicesDTO model module.
 * @module model/SmartDevicesDTO
 */
var SmartDevicesDTO = function () {
    /**
     * Constructs a new <code>SmartDevicesDTO</code>.
     * @alias module:model/SmartDevicesDTO
     * @class
     */

    function SmartDevicesDTO() {
        _classCallCheck(this, SmartDevicesDTO);

        this.merchant = undefined;
        this.store = undefined;
        this.terminal = undefined;
        this.vendor = undefined;
        this.vendor_uid = undefined;
        this.type = undefined;
        this.description = undefined;
        this.products = undefined;
        this.base_version = undefined;
        this.terminal_type = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTO} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTO} The populated <code>SmartDevicesDTO</code> instance.
    */


    _createClass(SmartDevicesDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesDTO();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ApiClient2.default.convertToType(data['store'], 'String');
                }
                if (data.hasOwnProperty('terminal')) {
                    obj['terminal'] = _ApiClient2.default.convertToType(data['terminal'], 'String');
                }
                if (data.hasOwnProperty('vendor')) {
                    obj['vendor'] = _ApiClient2.default.convertToType(data['vendor'], 'String');
                }
                if (data.hasOwnProperty('vendor_uid')) {
                    obj['vendor_uid'] = _ApiClient2.default.convertToType(data['vendor_uid'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('products')) {
                    obj['products'] = _ApiClient2.default.convertToType(data['products'], ['String']);
                }
                if (data.hasOwnProperty('base_version')) {
                    obj['base_version'] = _ApiClient2.default.convertToType(data['base_version'], 'String');
                }
                if (data.hasOwnProperty('terminal_type')) {
                    obj['terminal_type'] = _ApiClient2.default.convertToType(data['terminal_type'], 'String');
                }
            }
            return obj;
        }

        /**
         * Merchant
         * @member {String} merchant
         */


        /**
         * Store
         * @member {String} store
         */


        /**
         * Terminal
         * @member {String} terminal
         */


        /**
         * Vendor
         * @member {String} vendor
         */


        /**
         * Vendor uid
         * @member {String} vendor_uid
         */


        /**
         * Type
         * @member {String} type
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Products
         * @member {Array.<String>} products
         */


        /**
         * Base version
         * @member {String} base_version
         */


        /**
         * Terminal type
         * @member {String} terminal_type
         */

    }]);

    return SmartDevicesDTO;
}();

exports.default = SmartDevicesDTO;