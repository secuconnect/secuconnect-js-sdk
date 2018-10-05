'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCustomersProductModel = require('./LoyaltyCustomersProductModel');

var _LoyaltyCustomersProductModel2 = _interopRequireDefault(_LoyaltyCustomersProductModel);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _SmartTransactionsBasket = require('./SmartTransactionsBasket');

var _SmartTransactionsBasket2 = _interopRequireDefault(_SmartTransactionsBasket);

var _SmartTransactionsBasketInfo = require('./SmartTransactionsBasketInfo');

var _SmartTransactionsBasketInfo2 = _interopRequireDefault(_SmartTransactionsBasketInfo);

var _SmartTransactionsCheckin = require('./SmartTransactionsCheckin');

var _SmartTransactionsCheckin2 = _interopRequireDefault(_SmartTransactionsCheckin);

var _SmartTransactionsIdent = require('./SmartTransactionsIdent');

var _SmartTransactionsIdent2 = _interopRequireDefault(_SmartTransactionsIdent);

var _SmartTransactionsMerchant = require('./SmartTransactionsMerchant');

var _SmartTransactionsMerchant2 = _interopRequireDefault(_SmartTransactionsMerchant);

var _SmartTransactionsPickupOptions = require('./SmartTransactionsPickupOptions');

var _SmartTransactionsPickupOptions2 = _interopRequireDefault(_SmartTransactionsPickupOptions);

var _SmartTransactionsReceipt = require('./SmartTransactionsReceipt');

var _SmartTransactionsReceipt2 = _interopRequireDefault(_SmartTransactionsReceipt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SmartTransactionsProductModel model module.
* @module model/SmartTransactionsProductModel
*/
var SmartTransactionsProductModel = function () {
    /**
    * Constructs a new <code>SmartTransactionsProductModel</code>.
    * @alias module:model/SmartTransactionsProductModel
    * @class
    */

    function SmartTransactionsProductModel() {
        _classCallCheck(this, SmartTransactionsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.status = undefined;
        this.merchant = undefined;
        this.contract = undefined;
        this.marketplace_contract = undefined;
        this.customer = undefined;
        this.checkin = undefined;
        this.merchantRef = undefined;
        this.transactionRef = undefined;
        this.store = undefined;
        this.device_source = undefined;
        this.device_destination = undefined;
        this.created = undefined;
        this.updated = undefined;
        this.receipt_number = undefined;
        this.receipt = undefined;
        this.receipt_merchant = undefined;
        this.receipt_merchant_print = undefined;
        this.basket_info = undefined;
        this.basket = undefined;
        this.idents = undefined;
        this.tax_rate = undefined;
        this.tax_amount = undefined;
        this.cashier = undefined;
        this.market = undefined;
        this.order_option = undefined;
        this.pickup_options = undefined;
        this.product = undefined;
        this.trans_id = undefined;
        this.payment_method = undefined;
        this.transactions = undefined;
        this.last_visited_page = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsProductModel} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsProductModel} The populated <code>SmartTransactionsProductModel</code> instance.
    */


    _createClass(SmartTransactionsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _SmartTransactionsMerchant2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ProductInstanceUID2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('marketplace_contract')) {
                    obj['marketplace_contract'] = _ProductInstanceUID2.default.constructFromObject(data['marketplace_contract']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _LoyaltyCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('checkin')) {
                    obj['checkin'] = _SmartTransactionsCheckin2.default.constructFromObject(data['checkin']);
                }
                if (data.hasOwnProperty('merchantRef')) {
                    obj['merchantRef'] = _ApiClient2.default.convertToType(data['merchantRef'], 'String');
                }
                if (data.hasOwnProperty('transactionRef')) {
                    obj['transactionRef'] = _ApiClient2.default.convertToType(data['transactionRef'], 'String');
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ProductInstanceUID2.default.constructFromObject(data['store']);
                }
                if (data.hasOwnProperty('device_source')) {
                    obj['device_source'] = _ProductInstanceUID2.default.constructFromObject(data['device_source']);
                }
                if (data.hasOwnProperty('device_destination')) {
                    obj['device_destination'] = _ProductInstanceUID2.default.constructFromObject(data['device_destination']);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'Date');
                }
                if (data.hasOwnProperty('receipt_number')) {
                    obj['receipt_number'] = _ApiClient2.default.convertToType(data['receipt_number'], 'Number');
                }
                if (data.hasOwnProperty('receipt')) {
                    obj['receipt'] = _ApiClient2.default.convertToType(data['receipt'], [_SmartTransactionsReceipt2.default]);
                }
                if (data.hasOwnProperty('receipt_merchant')) {
                    obj['receipt_merchant'] = _ApiClient2.default.convertToType(data['receipt_merchant'], 'String');
                }
                if (data.hasOwnProperty('receipt_merchant_print')) {
                    obj['receipt_merchant_print'] = _ApiClient2.default.convertToType(data['receipt_merchant_print'], 'Boolean');
                }
                if (data.hasOwnProperty('basket_info')) {
                    obj['basket_info'] = _SmartTransactionsBasketInfo2.default.constructFromObject(data['basket_info']);
                }
                if (data.hasOwnProperty('basket')) {
                    obj['basket'] = _SmartTransactionsBasket2.default.constructFromObject(data['basket']);
                }
                if (data.hasOwnProperty('idents')) {
                    obj['idents'] = _ApiClient2.default.convertToType(data['idents'], [_SmartTransactionsIdent2.default]);
                }
                if (data.hasOwnProperty('tax_rate')) {
                    obj['tax_rate'] = _ApiClient2.default.convertToType(data['tax_rate'], 'Number');
                }
                if (data.hasOwnProperty('tax_amount')) {
                    obj['tax_amount'] = _ApiClient2.default.convertToType(data['tax_amount'], 'Number');
                }
                if (data.hasOwnProperty('cashier')) {
                    obj['cashier'] = _ApiClient2.default.convertToType(data['cashier'], 'String');
                }
                if (data.hasOwnProperty('market')) {
                    obj['market'] = _ApiClient2.default.convertToType(data['market'], 'String');
                }
                if (data.hasOwnProperty('order_option')) {
                    obj['order_option'] = _ApiClient2.default.convertToType(data['order_option'], 'String');
                }
                if (data.hasOwnProperty('pickup_options')) {
                    obj['pickup_options'] = _SmartTransactionsPickupOptions2.default.constructFromObject(data['pickup_options']);
                }
                if (data.hasOwnProperty('product')) {
                    obj['product'] = _ApiClient2.default.convertToType(data['product'], 'String');
                }
                if (data.hasOwnProperty('trans_id')) {
                    obj['trans_id'] = _ApiClient2.default.convertToType(data['trans_id'], 'Number');
                }
                if (data.hasOwnProperty('payment_method')) {
                    obj['payment_method'] = _ApiClient2.default.convertToType(data['payment_method'], 'String');
                }
                if (data.hasOwnProperty('transactions')) {
                    obj['transactions'] = _ProductInstanceUID2.default.constructFromObject(data['transactions']);
                }
                if (data.hasOwnProperty('last_visited_page')) {
                    obj['last_visited_page'] = _ApiClient2.default.convertToType(data['last_visited_page'], 'String');
                }
            }
            return obj;
        }

        /**
        * Object of smart transaction
        * @member {String} object
        */

        /**
        * Id of smart transaction
        * @member {String} id
        */

        /**
        * Status of smart transaction
        * @member {String} status
        */

        /**
        * Merchant
        * @member {module:model/SmartTransactionsMerchant} merchant
        */

        /**
        * Contract
        * @member {module:model/ProductInstanceUID} contract
        */

        /**
        * Marketplace contract
        * @member {module:model/ProductInstanceUID} marketplace_contract
        */

        /**
        * Customer
        * @member {module:model/LoyaltyCustomersProductModel} customer
        */

        /**
        * Check in
        * @member {module:model/SmartTransactionsCheckin} checkin
        */

        /**
        * Merchant ref
        * @member {String} merchantRef
        */

        /**
        * Transaction ref
        * @member {String} transactionRef
        */

        /**
        * Store
        * @member {module:model/ProductInstanceUID} store
        */

        /**
        * Device source
        * @member {module:model/ProductInstanceUID} device_source
        */

        /**
        * Device destination
        * @member {module:model/ProductInstanceUID} device_destination
        */

        /**
        * Created at date
        * @member {Date} created
        */

        /**
        * Updated at date
        * @member {Date} updated
        */

        /**
        * Receipt number
        * @member {Number} receipt_number
        */

        /**
        * Receipt
        * @member {Array.<module:model/SmartTransactionsReceipt>} receipt
        */

        /**
        * Receipt merchant
        * @member {String} receipt_merchant
        */

        /**
        * Receipt merchant print
        * @member {Boolean} receipt_merchant_print
        */

        /**
        * Basket info
        * @member {module:model/SmartTransactionsBasketInfo} basket_info
        */

        /**
        * Basket
        * @member {module:model/SmartTransactionsBasket} basket
        */

        /**
        * Idents
        * @member {Array.<module:model/SmartTransactionsIdent>} idents
        */

        /**
        * Tax rate
        * @member {Number} tax_rate
        */

        /**
        * Tax amount
        * @member {Number} tax_amount
        */

        /**
        * Cashier
        * @member {String} cashier
        */

        /**
        * Market
        * @member {String} market
        */

        /**
        * Order option
        * @member {String} order_option
        */

        /**
        * Pickup options
        * @member {module:model/SmartTransactionsPickupOptions} pickup_options
        */

        /**
        * Product
        * @member {String} product
        */

        /**
        * Transaction id
        * @member {Number} trans_id
        */

        /**
        * Payment method
        * @member {String} payment_method
        */

        /**
        * Transactions
        * @member {module:model/ProductInstanceUID} transactions
        */

        /**
        * Last visited page
        * @member {String} last_visited_page
        */

    }]);

    return SmartTransactionsProductModel;
}();

exports.default = SmartTransactionsProductModel;