'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartDeviceProductsEnabled = require('./SmartDeviceProductsEnabled');

var _SmartDeviceProductsEnabled2 = _interopRequireDefault(_SmartDeviceProductsEnabled);

var _SmartDeviceProductsPrepaid = require('./SmartDeviceProductsPrepaid');

var _SmartDeviceProductsPrepaid2 = _interopRequireDefault(_SmartDeviceProductsPrepaid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartDevicesProducts model module.
 * @module model/SmartDevicesProducts
 */
var SmartDevicesProducts = function () {
    /**
     * Constructs a new <code>SmartDevicesProducts</code>.
     * @alias module:model/SmartDevicesProducts
     * @class
     */

    function SmartDevicesProducts() {
        _classCallCheck(this, SmartDevicesProducts);

        this.loyalty = undefined;
        this.smart = undefined;
        this.cashreg = undefined;
        this.collect = undefined;
        this.showcase = undefined;
        this.vtm = undefined;
        this.prepaid = undefined;
    }

    /**
    * Constructs a <code>SmartDevicesProducts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesProducts} obj Optional instance to populate.
    * @return {module:model/SmartDevicesProducts} The populated <code>SmartDevicesProducts</code> instance.
    */


    _createClass(SmartDevicesProducts, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartDevicesProducts();

                if (data.hasOwnProperty('loyalty')) {
                    obj['loyalty'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['loyalty']);
                }
                if (data.hasOwnProperty('smart')) {
                    obj['smart'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['smart']);
                }
                if (data.hasOwnProperty('cashreg')) {
                    obj['cashreg'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['cashreg']);
                }
                if (data.hasOwnProperty('collect')) {
                    obj['collect'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['collect']);
                }
                if (data.hasOwnProperty('showcase')) {
                    obj['showcase'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['showcase']);
                }
                if (data.hasOwnProperty('vtm')) {
                    obj['vtm'] = _SmartDeviceProductsEnabled2.default.constructFromObject(data['vtm']);
                }
                if (data.hasOwnProperty('prepaid')) {
                    obj['prepaid'] = _SmartDeviceProductsPrepaid2.default.constructFromObject(data['prepaid']);
                }
            }
            return obj;
        }

        /**
         * Loyalty
         * @member {module:model/SmartDeviceProductsEnabled} loyalty
         */


        /**
         * Smart
         * @member {module:model/SmartDeviceProductsEnabled} smart
         */


        /**
         * Cashreg
         * @member {module:model/SmartDeviceProductsEnabled} cashreg
         */


        /**
         * Collect
         * @member {module:model/SmartDeviceProductsEnabled} collect
         */


        /**
         * Showcase
         * @member {module:model/SmartDeviceProductsEnabled} showcase
         */


        /**
         * Vtm
         * @member {module:model/SmartDeviceProductsEnabled} vtm
         */


        /**
         * Prepaid
         * @member {module:model/SmartDeviceProductsPrepaid} prepaid
         */

    }]);

    return SmartDevicesProducts;
}();

exports.default = SmartDevicesProducts;