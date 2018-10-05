'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardgroupsProductModel = require('./LoyaltyCardgroupsProductModel');

var _LoyaltyCardgroupsProductModel2 = _interopRequireDefault(_LoyaltyCardgroupsProductModel);

var _LoyaltyCardsProductModel = require('./LoyaltyCardsProductModel');

var _LoyaltyCardsProductModel2 = _interopRequireDefault(_LoyaltyCardsProductModel);

var _LoyaltyCustomersProductModel = require('./LoyaltyCustomersProductModel');

var _LoyaltyCustomersProductModel2 = _interopRequireDefault(_LoyaltyCustomersProductModel);

var _LoyaltyMerchantcardsDTOPaymentContainer = require('./LoyaltyMerchantcardsDTOPaymentContainer');

var _LoyaltyMerchantcardsDTOPaymentContainer2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOPaymentContainer);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyMerchantcardsProductModel model module.
* @module model/LoyaltyMerchantcardsProductModel
*/
var LoyaltyMerchantcardsProductModel = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsProductModel</code>.
    * @alias module:model/LoyaltyMerchantcardsProductModel
    * @class
    */

    function LoyaltyMerchantcardsProductModel() {
        _classCallCheck(this, LoyaltyMerchantcardsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.card = undefined;
        this.merchant = undefined;
        this.created_for_merchant = undefined;
        this.created_for_store = undefined;
        this.customer = undefined;
        this.cardgroup = undefined;
        this.payment_container = undefined;
        this.balance = undefined;
        this.points = undefined;
        this.bonus_balance = undefined;
        this.cash_balance = undefined;
        this.stock_status = undefined;
        this.lock_status = undefined;
        this.last_usage = undefined;
        this.last_charge = undefined;
        this.is_base_card = undefined;
        this.passcode = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsProductModel} The populated <code>LoyaltyMerchantcardsProductModel</code> instance.
    */


    _createClass(LoyaltyMerchantcardsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('card')) {
                    obj['card'] = _LoyaltyCardsProductModel2.default.constructFromObject(data['card']);
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('created_for_merchant')) {
                    obj['created_for_merchant'] = _ProductInstanceUID2.default.constructFromObject(data['created_for_merchant']);
                }
                if (data.hasOwnProperty('created_for_store')) {
                    obj['created_for_store'] = _ProductInstanceUID2.default.constructFromObject(data['created_for_store']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _LoyaltyCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('cardgroup')) {
                    obj['cardgroup'] = _LoyaltyCardgroupsProductModel2.default.constructFromObject(data['cardgroup']);
                }
                if (data.hasOwnProperty('payment_container')) {
                    obj['payment_container'] = _LoyaltyMerchantcardsDTOPaymentContainer2.default.constructFromObject(data['payment_container']);
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('points')) {
                    obj['points'] = _ApiClient2.default.convertToType(data['points'], 'Number');
                }
                if (data.hasOwnProperty('bonus_balance')) {
                    obj['bonus_balance'] = _ApiClient2.default.convertToType(data['bonus_balance'], 'Number');
                }
                if (data.hasOwnProperty('cash_balance')) {
                    obj['cash_balance'] = _ApiClient2.default.convertToType(data['cash_balance'], 'Number');
                }
                if (data.hasOwnProperty('stock_status')) {
                    obj['stock_status'] = _ApiClient2.default.convertToType(data['stock_status'], 'String');
                }
                if (data.hasOwnProperty('lock_status')) {
                    obj['lock_status'] = _ApiClient2.default.convertToType(data['lock_status'], 'String');
                }
                if (data.hasOwnProperty('last_usage')) {
                    obj['last_usage'] = _ApiClient2.default.convertToType(data['last_usage'], 'Date');
                }
                if (data.hasOwnProperty('last_charge')) {
                    obj['last_charge'] = _ApiClient2.default.convertToType(data['last_charge'], 'Date');
                }
                if (data.hasOwnProperty('is_base_card')) {
                    obj['is_base_card'] = _ApiClient2.default.convertToType(data['is_base_card'], 'Boolean');
                }
                if (data.hasOwnProperty('passcode')) {
                    obj['passcode'] = _ApiClient2.default.convertToType(data['passcode'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Object of loyalty merchant card
        * @member {String} object
        */

        /**
        * Id of loyalty merchant card
        * @member {String} id
        */

        /**
        * Id of loyalty store group
        * @member {module:model/LoyaltyCardsProductModel} card
        */

        /**
        * Current merchant id
        * @member {module:model/ProductInstanceUID} merchant
        */

        /**
        * Merchant id, that loyalty merchant card object was created for
        * @member {module:model/ProductInstanceUID} created_for_merchant
        */

        /**
        * Store id, that loyalty merchant card object was created for
        * @member {module:model/ProductInstanceUID} created_for_store
        */

        /**
        * Loyalty merchant card customer
        * @member {module:model/LoyaltyCustomersProductModel} customer
        */

        /**
        * Loyalty merchant card card group
        * @member {module:model/LoyaltyCardgroupsProductModel} cardgroup
        */

        /**
        * Loyalty merchant card payment container
        * @member {module:model/LoyaltyMerchantcardsDTOPaymentContainer} payment_container
        */

        /**
        * Loyalty merchant card balance
        * @member {Number} balance
        */

        /**
        * Loyalty merchant card points
        * @member {Number} points
        */

        /**
        * Loyalty merchant card bonus balance
        * @member {Number} bonus_balance
        */

        /**
        * Loyalty merchant card cash balance
        * @member {Number} cash_balance
        */

        /**
        * Loyalty merchant card stock status
        * @member {String} stock_status
        */

        /**
        * Loyalty merchant card lock status
        * @member {String} lock_status
        */

        /**
        * Loyalty merchant card last usage
        * @member {Date} last_usage
        */

        /**
        * Loyalty merchant card last charge
        * @member {Date} last_charge
        */

        /**
        * Information whether loyalty merchant card is base card
        * @member {Boolean} is_base_card
        */

        /**
        * Loyalty merchant card passcode
        * @member {Number} passcode
        */

    }]);

    return LoyaltyMerchantcardsProductModel;
}();

exports.default = LoyaltyMerchantcardsProductModel;