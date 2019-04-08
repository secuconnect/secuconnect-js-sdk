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
 * The LoyaltyMerchantcardsDTOTransaction model module.
 * @module model/LoyaltyMerchantcardsDTOTransaction
 */
var LoyaltyMerchantcardsDTOTransaction = function () {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTOTransaction</code>.
     * @alias module:model/LoyaltyMerchantcardsDTOTransaction
     * @class
     */

    function LoyaltyMerchantcardsDTOTransaction() {
        _classCallCheck(this, LoyaltyMerchantcardsDTOTransaction);

        this.action = undefined;
        this.terminal_id = undefined;
        this.amount = undefined;
        this.tid = undefined;
        this.store = undefined;
        this.cardnumber = undefined;
        this.bonus_amount = undefined;
        this.amount_split_allowed = undefined;
        this.merchant_id = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOTransaction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOTransaction} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOTransaction} The populated <code>LoyaltyMerchantcardsDTOTransaction</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTOTransaction, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTOTransaction();

                if (data.hasOwnProperty('action')) {
                    obj['action'] = _ApiClient2.default.convertToType(data['action'], 'String');
                }
                if (data.hasOwnProperty('terminal_id')) {
                    obj['terminal_id'] = _ApiClient2.default.convertToType(data['terminal_id'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('tid')) {
                    obj['tid'] = _ApiClient2.default.convertToType(data['tid'], 'String');
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ApiClient2.default.convertToType(data['store'], 'String');
                }
                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'Number');
                }
                if (data.hasOwnProperty('bonus_amount')) {
                    obj['bonus_amount'] = _ApiClient2.default.convertToType(data['bonus_amount'], 'Number');
                }
                if (data.hasOwnProperty('amount_split_allowed')) {
                    obj['amount_split_allowed'] = _ApiClient2.default.convertToType(data['amount_split_allowed'], 'String');
                }
                if (data.hasOwnProperty('merchant_id')) {
                    obj['merchant_id'] = _ApiClient2.default.convertToType(data['merchant_id'], 'String');
                }
            }
            return obj;
        }

        /**
         * Action
         * @member {String} action
         */


        /**
         * Terminal id
         * @member {String} terminal_id
         */


        /**
         * Amount
         * @member {Number} amount
         */


        /**
         * Tid
         * @member {String} tid
         */


        /**
         * Store id
         * @member {String} store
         */


        /**
         * Card number
         * @member {Number} cardnumber
         */


        /**
         * Bonus amount
         * @member {Number} bonus_amount
         */


        /**
         * Amount split allowed
         * @member {String} amount_split_allowed
         */


        /**
         * Merchant id
         * @member {String} merchant_id
         */

    }]);

    return LoyaltyMerchantcardsDTOTransaction;
}();

exports.default = LoyaltyMerchantcardsDTOTransaction;