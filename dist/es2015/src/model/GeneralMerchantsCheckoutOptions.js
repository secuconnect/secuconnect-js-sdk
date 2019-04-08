'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeneralMerchantsCheckoutOptionsCollection = require('./GeneralMerchantsCheckoutOptionsCollection');

var _GeneralMerchantsCheckoutOptionsCollection2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptionsCollection);

var _GeneralMerchantsCheckoutOptionsShipping = require('./GeneralMerchantsCheckoutOptionsShipping');

var _GeneralMerchantsCheckoutOptionsShipping2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptionsShipping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralMerchantsCheckoutOptions model module.
 * @module model/GeneralMerchantsCheckoutOptions
 */
var GeneralMerchantsCheckoutOptions = function () {
    /**
     * Constructs a new <code>GeneralMerchantsCheckoutOptions</code>.
     * @alias module:model/GeneralMerchantsCheckoutOptions
     * @class
     */

    function GeneralMerchantsCheckoutOptions() {
        _classCallCheck(this, GeneralMerchantsCheckoutOptions);

        this.enabled = undefined;
        this.shipping = undefined;
        this.collection = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptions} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptions} The populated <code>GeneralMerchantsCheckoutOptions</code> instance.
    */


    _createClass(GeneralMerchantsCheckoutOptions, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsCheckoutOptions();

                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
                if (data.hasOwnProperty('shipping')) {
                    obj['shipping'] = _GeneralMerchantsCheckoutOptionsShipping2.default.constructFromObject(data['shipping']);
                }
                if (data.hasOwnProperty('collection')) {
                    obj['collection'] = _GeneralMerchantsCheckoutOptionsCollection2.default.constructFromObject(data['collection']);
                }
            }
            return obj;
        }

        /**
         * Enabled
         * @member {Boolean} enabled
         */


        /**
         * Shipping
         * @member {module:model/GeneralMerchantsCheckoutOptionsShipping} shipping
         */


        /**
         * Collection
         * @member {module:model/GeneralMerchantsCheckoutOptionsCollection} collection
         */

    }]);

    return GeneralMerchantsCheckoutOptions;
}();

exports.default = GeneralMerchantsCheckoutOptions;