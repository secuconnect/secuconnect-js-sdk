'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _ProductInstanceID = require('./ProductInstanceID');

var _ProductInstanceID2 = _interopRequireDefault(_ProductInstanceID);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _SmartTransactionsBasket = require('./SmartTransactionsBasket');

var _SmartTransactionsBasket2 = _interopRequireDefault(_SmartTransactionsBasket);

var _SmartTransactionsBasketInfo = require('./SmartTransactionsBasketInfo');

var _SmartTransactionsBasketInfo2 = _interopRequireDefault(_SmartTransactionsBasketInfo);

var _SmartTransactionsCheckin = require('./SmartTransactionsCheckin');

var _SmartTransactionsCheckin2 = _interopRequireDefault(_SmartTransactionsCheckin);

var _SmartTransactionsCheckoutLinks = require('./SmartTransactionsCheckoutLinks');

var _SmartTransactionsCheckoutLinks2 = _interopRequireDefault(_SmartTransactionsCheckoutLinks);

var _SmartTransactionsIdent = require('./SmartTransactionsIdent');

var _SmartTransactionsIdent2 = _interopRequireDefault(_SmartTransactionsIdent);

var _SmartTransactionsPickupOptions = require('./SmartTransactionsPickupOptions');

var _SmartTransactionsPickupOptions2 = _interopRequireDefault(_SmartTransactionsPickupOptions);

var _SmartTransactionsReceipt = require('./SmartTransactionsReceipt');

var _SmartTransactionsReceipt2 = _interopRequireDefault(_SmartTransactionsReceipt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartTransactionsDTO model module.
 * @module model/SmartTransactionsDTO
 */
var SmartTransactionsDTO = function () {
    /**
     * Constructs a new <code>SmartTransactionsDTO</code>.
     * @alias module:model/SmartTransactionsDTO
     * @class
     */

    function SmartTransactionsDTO() {
        _classCallCheck(this, SmartTransactionsDTO);

        this.merchant = undefined;
        this.provider_contract = undefined;
        this.order_option = undefined;
        this.status = undefined;
        this.transactionRef = undefined;
        this.merchantRef = undefined;
        this.basket = undefined;
        this.basket_info = undefined;
        this.idents = undefined;
        this.tax_amount = undefined;
        this.tax_rate = undefined;
        this.market = undefined;
        this.cashier = undefined;
        this.product = undefined;
        this.receipt = undefined;
        this.receipt_number = undefined;
        this.device_source = undefined;
        this.trans_id = undefined;
        this.contract = undefined;
        this.pickup_options = undefined;
        this.last_visited_page = undefined;
        this.customer = undefined;
        this.shipping_address = undefined;
        this.container = undefined;
        this.checkin = undefined;
        this.payment_method = undefined;
        this.is_demo = undefined;
        this.checkout_links = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsDTO} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsDTO} The populated <code>SmartTransactionsDTO</code> instance.
    */


    _createClass(SmartTransactionsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsDTO();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('provider_contract')) {
                    obj['provider_contract'] = _ProductInstanceUID2.default.constructFromObject(data['provider_contract']);
                }
                if (data.hasOwnProperty('order_option')) {
                    obj['order_option'] = _ApiClient2.default.convertToType(data['order_option'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('transactionRef')) {
                    obj['transactionRef'] = _ApiClient2.default.convertToType(data['transactionRef'], 'String');
                }
                if (data.hasOwnProperty('merchantRef')) {
                    obj['merchantRef'] = _ApiClient2.default.convertToType(data['merchantRef'], 'String');
                }
                if (data.hasOwnProperty('basket')) {
                    obj['basket'] = _SmartTransactionsBasket2.default.constructFromObject(data['basket']);
                }
                if (data.hasOwnProperty('basket_info')) {
                    obj['basket_info'] = _SmartTransactionsBasketInfo2.default.constructFromObject(data['basket_info']);
                }
                if (data.hasOwnProperty('idents')) {
                    obj['idents'] = _ApiClient2.default.convertToType(data['idents'], [_SmartTransactionsIdent2.default]);
                }
                if (data.hasOwnProperty('tax_amount')) {
                    obj['tax_amount'] = _ApiClient2.default.convertToType(data['tax_amount'], 'Number');
                }
                if (data.hasOwnProperty('tax_rate')) {
                    obj['tax_rate'] = _ApiClient2.default.convertToType(data['tax_rate'], 'Number');
                }
                if (data.hasOwnProperty('market')) {
                    obj['market'] = _ApiClient2.default.convertToType(data['market'], 'String');
                }
                if (data.hasOwnProperty('cashier')) {
                    obj['cashier'] = _ApiClient2.default.convertToType(data['cashier'], 'String');
                }
                if (data.hasOwnProperty('product')) {
                    obj['product'] = _ApiClient2.default.convertToType(data['product'], 'String');
                }
                if (data.hasOwnProperty('receipt')) {
                    obj['receipt'] = _ApiClient2.default.convertToType(data['receipt'], [_SmartTransactionsReceipt2.default]);
                }
                if (data.hasOwnProperty('receipt_number')) {
                    obj['receipt_number'] = _ApiClient2.default.convertToType(data['receipt_number'], 'Number');
                }
                if (data.hasOwnProperty('device_source')) {
                    obj['device_source'] = _ApiClient2.default.convertToType(data['device_source'], 'String');
                }
                if (data.hasOwnProperty('trans_id')) {
                    obj['trans_id'] = _ApiClient2.default.convertToType(data['trans_id'], 'Number');
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ProductInstanceID2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('pickup_options')) {
                    obj['pickup_options'] = _SmartTransactionsPickupOptions2.default.constructFromObject(data['pickup_options']);
                }
                if (data.hasOwnProperty('last_visited_page')) {
                    obj['last_visited_page'] = _ApiClient2.default.convertToType(data['last_visited_page'], 'String');
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('shipping_address')) {
                    obj['shipping_address'] = _PaymentCustomersProductModel2.default.constructFromObject(data['shipping_address']);
                }
                if (data.hasOwnProperty('container')) {
                    obj['container'] = _ProductInstanceUID2.default.constructFromObject(data['container']);
                }
                if (data.hasOwnProperty('checkin')) {
                    obj['checkin'] = _SmartTransactionsCheckin2.default.constructFromObject(data['checkin']);
                }
                if (data.hasOwnProperty('payment_method')) {
                    obj['payment_method'] = _ApiClient2.default.convertToType(data['payment_method'], 'String');
                }
                if (data.hasOwnProperty('is_demo')) {
                    obj['is_demo'] = _ApiClient2.default.convertToType(data['is_demo'], 'Boolean');
                }
                if (data.hasOwnProperty('checkout_links')) {
                    obj['checkout_links'] = _SmartTransactionsCheckoutLinks2.default.constructFromObject(data['checkout_links']);
                }
            }
            return obj;
        }

        /**
         * Merchant
         * @member {String} merchant
         */


        /**
         * Provider contract
         * @member {module:model/ProductInstanceUID} provider_contract
         */


        /**
         * Order option
         * @member {String} order_option
         */


        /**
         * Status
         * @member {String} status
         */


        /**
         * Transaction ref
         * @member {String} transactionRef
         */


        /**
         * Merchant ref
         * @member {String} merchantRef
         */


        /**
         * Basket
         * @member {module:model/SmartTransactionsBasket} basket
         */


        /**
         * Basket info
         * @member {module:model/SmartTransactionsBasketInfo} basket_info
         */


        /**
         * Idents
         * @member {Array.<module:model/SmartTransactionsIdent>} idents
         */


        /**
         * Tax amount
         * @member {Number} tax_amount
         */


        /**
         * Tax rate
         * @member {Number} tax_rate
         */


        /**
         * Market
         * @member {String} market
         */


        /**
         * Cashier
         * @member {String} cashier
         */


        /**
         * Product
         * @member {String} product
         */


        /**
         * Receipt
         * @member {Array.<module:model/SmartTransactionsReceipt>} receipt
         */


        /**
         * Receipt number
         * @member {Number} receipt_number
         */


        /**
         * Device source
         * @member {String} device_source
         */


        /**
         * Transaction id
         * @member {Number} trans_id
         */


        /**
         * Contract
         * @member {module:model/ProductInstanceID} contract
         */


        /**
         * Pickup options
         * @member {module:model/SmartTransactionsPickupOptions} pickup_options
         */


        /**
         * Last visited page
         * @member {String} last_visited_page
         */


        /**
         * Customer
         * @member {module:model/PaymentCustomersProductModel} customer
         */


        /**
         * Customers delivery address
         * @member {module:model/PaymentCustomersProductModel} shipping_address
         */


        /**
         * Payment Container
         * @member {module:model/ProductInstanceUID} container
         */


        /**
         * Check in
         * @member {module:model/SmartTransactionsCheckin} checkin
         */


        /**
         * Payment method
         * @member {String} payment_method
         */


        /**
         * Demo payment
         * @member {Boolean} is_demo
         */


        /**
         * Checkout Links
         * @member {module:model/SmartTransactionsCheckoutLinks} checkout_links
         */

    }]);

    return SmartTransactionsDTO;
}();

exports.default = SmartTransactionsDTO;