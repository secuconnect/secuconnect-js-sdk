'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardgroupsDTOMerchant = require('./LoyaltyCardgroupsDTOMerchant');

var _LoyaltyCardgroupsDTOMerchant2 = _interopRequireDefault(_LoyaltyCardgroupsDTOMerchant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyCardgroupsProductModel model module.
 * @module model/LoyaltyCardgroupsProductModel
 */
var LoyaltyCardgroupsProductModel = function () {
    /**
     * Constructs a new <code>LoyaltyCardgroupsProductModel</code>.
     * @alias module:model/LoyaltyCardgroupsProductModel
     * @class
     */

    function LoyaltyCardgroupsProductModel() {
        _classCallCheck(this, LoyaltyCardgroupsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.display_name = undefined;
        this.display_name_raw = undefined;
        this.stock_warn_limit = undefined;
        this.picture = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsProductModel} The populated <code>LoyaltyCardgroupsProductModel</code> instance.
    */


    _createClass(LoyaltyCardgroupsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCardgroupsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _LoyaltyCardgroupsDTOMerchant2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('display_name')) {
                    obj['display_name'] = _ApiClient2.default.convertToType(data['display_name'], 'String');
                }
                if (data.hasOwnProperty('display_name_raw')) {
                    obj['display_name_raw'] = _ApiClient2.default.convertToType(data['display_name_raw'], 'String');
                }
                if (data.hasOwnProperty('stock_warn_limit')) {
                    obj['stock_warn_limit'] = _ApiClient2.default.convertToType(data['stock_warn_limit'], 'String');
                }
                if (data.hasOwnProperty('picture')) {
                    obj['picture'] = _ApiClient2.default.convertToType(data['picture'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of loyalty card group
         * @member {String} object
         */


        /**
         * Id of loyalty card group
         * @member {String} id
         */


        /**
         * Loyalty card group merchant
         * @member {module:model/LoyaltyCardgroupsDTOMerchant} merchant
         */


        /**
         * Loyalty card group display name
         * @member {String} display_name
         */


        /**
         * Loyalty card group display name raw
         * @member {String} display_name_raw
         */


        /**
         * Loyalty card group stock warn limit
         * @member {String} stock_warn_limit
         */


        /**
         * Loyalty card group picture
         * @member {String} picture
         */

    }]);

    return LoyaltyCardgroupsProductModel;
}();

exports.default = LoyaltyCardgroupsProductModel;