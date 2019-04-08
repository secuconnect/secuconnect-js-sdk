'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _SmartDevicesDevice = require('./SmartDevicesDevice');

var _SmartDevicesDevice2 = _interopRequireDefault(_SmartDevicesDevice);

var _SmartDevicesProducts = require('./SmartDevicesProducts');

var _SmartDevicesProducts2 = _interopRequireDefault(_SmartDevicesProducts);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartDevicesProductModel model module.
 * @module model/SmartDevicesProductModel
 */
var SmartDevicesProductModel = function () {
    /**
     * Constructs a new <code>SmartDevicesProductModel</code>.
     * @alias module:model/SmartDevicesProductModel
     * @class
     */

    function SmartDevicesProductModel() {
        _classCallCheck(this, SmartDevicesProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.store = undefined;
        this.vendor = undefined;
        this.vendor_uid = undefined;
        this.type = undefined;
        this.device = undefined;
        this.routing = undefined;
        this.user_pin = undefined;
        this.products = undefined;
        this.description = undefined;
        this.idle_screen_register = undefined;
        this.idle_screen_terminal = undefined;
        this.created = undefined;
        this.online = undefined;
        this.terminal_type = undefined;
        this.base_version = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesProductModel} obj Optional instance to populate.
    * @return {module:model/SmartDevicesProductModel} The populated <code>SmartDevicesProductModel</code> instance.
    */


    _createClass(SmartDevicesProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _Store2.default.constructFromObject(data['store']);
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
                if (data.hasOwnProperty('device')) {
                    obj['device'] = _SmartDevicesDevice2.default.constructFromObject(data['device']);
                }
                if (data.hasOwnProperty('routing')) {
                    obj['routing'] = _ProductInstanceUID2.default.constructFromObject(data['routing']);
                }
                if (data.hasOwnProperty('user_pin')) {
                    obj['user_pin'] = _ApiClient2.default.convertToType(data['user_pin'], 'String');
                }
                if (data.hasOwnProperty('products')) {
                    obj['products'] = _SmartDevicesProducts2.default.constructFromObject(data['products']);
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('idle_screen_register')) {
                    obj['idle_screen_register'] = _ApiClient2.default.convertToType(data['idle_screen_register'], 'String');
                }
                if (data.hasOwnProperty('idle_screen_terminal')) {
                    obj['idle_screen_terminal'] = _ApiClient2.default.convertToType(data['idle_screen_terminal'], 'String');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('online')) {
                    obj['online'] = _ApiClient2.default.convertToType(data['online'], 'Boolean');
                }
                if (data.hasOwnProperty('terminal_type')) {
                    obj['terminal_type'] = _ApiClient2.default.convertToType(data['terminal_type'], 'String');
                }
                if (data.hasOwnProperty('base_version')) {
                    obj['base_version'] = _ApiClient2.default.convertToType(data['base_version'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of smart device
         * @member {String} object
         */


        /**
         * Id of smart device
         * @member {String} id
         */


        /**
         * Merchant
         * @member {module:model/ProductInstanceUID} merchant
         */


        /**
         * Store
         * @member {module:model/Store} store
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
         * Device
         * @member {module:model/SmartDevicesDevice} device
         */


        /**
         * Routing
         * @member {module:model/ProductInstanceUID} routing
         */


        /**
         * User pin
         * @member {String} user_pin
         */


        /**
         * Products
         * @member {module:model/SmartDevicesProducts} products
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Idle screen register
         * @member {String} idle_screen_register
         */


        /**
         * Idle screen terminal
         * @member {String} idle_screen_terminal
         */


        /**
         * Created at date
         * @member {String} created
         */


        /**
         * Online
         * @member {Boolean} online
         */


        /**
         * Terminal type
         * @member {String} terminal_type
         */


        /**
         * Base version
         * @member {String} base_version
         */

    }]);

    return SmartDevicesProductModel;
}();

exports.default = SmartDevicesProductModel;