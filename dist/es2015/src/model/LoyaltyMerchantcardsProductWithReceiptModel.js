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

var _LoyaltyMerchantcardsProductModel = require('./LoyaltyMerchantcardsProductModel');

var _LoyaltyMerchantcardsProductModel2 = _interopRequireDefault(_LoyaltyMerchantcardsProductModel);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _ReceiptType = require('./ReceiptType');

var _ReceiptType2 = _interopRequireDefault(_ReceiptType);

var _ReceiptTypeValue = require('./ReceiptTypeValue');

var _ReceiptTypeValue2 = _interopRequireDefault(_ReceiptTypeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyMerchantcardsProductWithReceiptModel model module.
* @module model/LoyaltyMerchantcardsProductWithReceiptModel
*/
var LoyaltyMerchantcardsProductWithReceiptModel = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsProductWithReceiptModel</code>.
    * @alias module:model/LoyaltyMerchantcardsProductWithReceiptModel
    * @class
    * @implements module:model/LoyaltyMerchantcardsProductModel
    */

    function LoyaltyMerchantcardsProductWithReceiptModel() {
        _classCallCheck(this, LoyaltyMerchantcardsProductWithReceiptModel);

        this.receipt_header = undefined;
        this.receipt = undefined;
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


        _LoyaltyMerchantcardsProductModel2.default.call(this);
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsProductWithReceiptModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsProductWithReceiptModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsProductWithReceiptModel} The populated <code>LoyaltyMerchantcardsProductWithReceiptModel</code> instance.
    */


    _createClass(LoyaltyMerchantcardsProductWithReceiptModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsProductWithReceiptModel();

                _LoyaltyMerchantcardsProductModel2.default.constructFromObject(data, obj);

                if (data.hasOwnProperty('receipt_header')) {
                    obj['receipt_header'] = _ApiClient2.default.convertToType(data['receipt_header'], [_ReceiptType2.default]);
                }
                if (data.hasOwnProperty('receipt')) {
                    obj['receipt'] = _ApiClient2.default.convertToType(data['receipt'], [_ReceiptTypeValue2.default]);
                }
            }
            return obj;
        }

        /**
        * Receipt header
        * @member {Array.<module:model/ReceiptType>} receipt_header
        */

        /**
        * Receipt
        * @member {Array.<module:model/ReceiptTypeValue>} receipt
        */


        // Implement LoyaltyMerchantcardsProductModel interface:
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

    return LoyaltyMerchantcardsProductWithReceiptModel;
}();

exports.default = LoyaltyMerchantcardsProductWithReceiptModel;