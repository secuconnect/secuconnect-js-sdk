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
 * The LoyaltyMerchantcardsDTO model module.
 * @module model/LoyaltyMerchantcardsDTO
 */
var LoyaltyMerchantcardsDTO = function () {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTO</code>.
     * @alias module:model/LoyaltyMerchantcardsDTO
     * @class
     */

    function LoyaltyMerchantcardsDTO() {
        _classCallCheck(this, LoyaltyMerchantcardsDTO);

        this.merchant = undefined;
        this.card = undefined;
        this.payment_container = undefined;
        this.created_by_merchant = undefined;
        this.used_by_merchant = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTO} The populated <code>LoyaltyMerchantcardsDTO</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTO();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('card')) {
                    obj['card'] = _ApiClient2.default.convertToType(data['card'], 'String');
                }
                if (data.hasOwnProperty('payment_container')) {
                    obj['payment_container'] = _ApiClient2.default.convertToType(data['payment_container'], 'String');
                }
                if (data.hasOwnProperty('created_by_merchant')) {
                    obj['created_by_merchant'] = _ApiClient2.default.convertToType(data['created_by_merchant'], 'Boolean');
                }
                if (data.hasOwnProperty('used_by_merchant')) {
                    obj['used_by_merchant'] = _ApiClient2.default.convertToType(data['used_by_merchant'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * General merchant id
         * @member {String} merchant
         */


        /**
         * Loyalty card id
         * @member {String} card
         */


        /**
         * Loyalty payment container id
         * @member {String} payment_container
         */


        /**
         * Created by general merchant or not
         * @member {Boolean} created_by_merchant
         */


        /**
         * Used by general merchant or not
         * @member {Boolean} used_by_merchant
         */

    }]);

    return LoyaltyMerchantcardsDTO;
}();

exports.default = LoyaltyMerchantcardsDTO;