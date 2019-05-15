'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContainersProductModel = require('./PaymentContainersProductModel');

var _PaymentContainersProductModel2 = _interopRequireDefault(_PaymentContainersProductModel);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

var _SecupayBasketItem = require('./SecupayBasketItem');

var _SecupayBasketItem2 = _interopRequireDefault(_SecupayBasketItem);

var _SecupayRedirectUrl = require('./SecupayRedirectUrl');

var _SecupayRedirectUrl2 = _interopRequireDefault(_SecupayRedirectUrl);

var _SecupaySubTransactionProductModel = require('./SecupaySubTransactionProductModel');

var _SecupaySubTransactionProductModel2 = _interopRequireDefault(_SecupaySubTransactionProductModel);

var _SecupayTransactionProductModelUsedPaymentInstrument = require('./SecupayTransactionProductModelUsedPaymentInstrument');

var _SecupayTransactionProductModelUsedPaymentInstrument2 = _interopRequireDefault(_SecupayTransactionProductModelUsedPaymentInstrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SecupayTransactionProductModel model module.
 * @module model/SecupayTransactionProductModel
 */
var SecupayTransactionProductModel = function () {
    /**
     * Constructs a new <code>SecupayTransactionProductModel</code>.
     * @alias module:model/SecupayTransactionProductModel
     * @class
     */

    function SecupayTransactionProductModel() {
        _classCallCheck(this, SecupayTransactionProductModel);

        this.object = undefined;
        this.id = undefined;
        this.trans_id = undefined;
        this.status = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.purpose = undefined;
        this.order_id = undefined;
        this.basket = undefined;
        this.transaction_status = undefined;
        this.accrual = undefined;
        this.payment_action = undefined;
        this.transfer_purpose = undefined;
        this.transfer_account = undefined;
        this.customer = undefined;
        this.used_payment_instrument = undefined;
        this.redirect_url = undefined;
        this.iframe_url = undefined;
        this.container = undefined;
        this.sub_transactions = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModel} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModel} The populated <code>SecupayTransactionProductModel</code> instance.
    */


    _createClass(SecupayTransactionProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('trans_id')) {
                    obj['trans_id'] = _ApiClient2.default.convertToType(data['trans_id'], 'Number');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('purpose')) {
                    obj['purpose'] = _ApiClient2.default.convertToType(data['purpose'], 'String');
                }
                if (data.hasOwnProperty('order_id')) {
                    obj['order_id'] = _ApiClient2.default.convertToType(data['order_id'], 'String');
                }
                if (data.hasOwnProperty('basket')) {
                    obj['basket'] = _ApiClient2.default.convertToType(data['basket'], [_SecupayBasketItem2.default]);
                }
                if (data.hasOwnProperty('transaction_status')) {
                    obj['transaction_status'] = _ApiClient2.default.convertToType(data['transaction_status'], 'String');
                }
                if (data.hasOwnProperty('accrual')) {
                    obj['accrual'] = _ApiClient2.default.convertToType(data['accrual'], 'Boolean');
                }
                if (data.hasOwnProperty('payment_action')) {
                    obj['payment_action'] = _ApiClient2.default.convertToType(data['payment_action'], 'String');
                }
                if (data.hasOwnProperty('transfer_purpose')) {
                    obj['transfer_purpose'] = _ApiClient2.default.convertToType(data['transfer_purpose'], 'String');
                }
                if (data.hasOwnProperty('transfer_account')) {
                    obj['transfer_account'] = _PaymentInformation2.default.constructFromObject(data['transfer_account']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('used_payment_instrument')) {
                    obj['used_payment_instrument'] = _SecupayTransactionProductModelUsedPaymentInstrument2.default.constructFromObject(data['used_payment_instrument']);
                }
                if (data.hasOwnProperty('redirect_url')) {
                    obj['redirect_url'] = _SecupayRedirectUrl2.default.constructFromObject(data['redirect_url']);
                }
                if (data.hasOwnProperty('iframe_url')) {
                    obj['iframe_url'] = _ApiClient2.default.convertToType(data['iframe_url'], 'String');
                }
                if (data.hasOwnProperty('container')) {
                    obj['container'] = _PaymentContainersProductModel2.default.constructFromObject(data['container']);
                }
                if (data.hasOwnProperty('sub_transactions')) {
                    obj['sub_transactions'] = _ApiClient2.default.convertToType(data['sub_transactions'], [_SecupaySubTransactionProductModel2.default]);
                }
            }
            return obj;
        }

        /**
         * Product name
         * @member {String} object
         */


        /**
         * ID of instance
         * @member {String} id
         */


        /**
         * Transaction identifier
         * @member {Number} trans_id
         */


        /**
         * Transaction status
         * @member {String} status
         */


        /**
         * Total amount of payment in cents (or the smallest cash unit of the relevant currency)
         * @member {Number} amount
         */


        /**
         * ISO 4217 code of currency, eg EUR for Euro.
         * @member {String} currency
         */


        /**
         * The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer.
         * @member {String} purpose
         */


        /**
         * Specifying an order number. Depending on the contract setting, this must be unique for each payment.
         * @member {String} order_id
         */


        /**
         * A list of items that are being purchased.
         * @member {Array.<module:model/SecupayBasketItem>} basket
         */


        /**
         * Transaction status (number)
         * @member {String} transaction_status
         */


        /**
         * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
         * @member {Boolean} accrual
         */


        /**
         * Specifies whether a pre-authorization (\"authorization\") or instant payment ( \"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
         * @member {String} payment_action
         */


        /**
         * The purpose the payer needs to use for his transfer
         * @member {String} transfer_purpose
         */


        /**
         * The bank account the payer needs to use for his transfer
         * @member {module:model/PaymentInformation} transfer_account
         */


        /**
         * The customer object
         * @member {module:model/PaymentCustomersProductModel} customer
         */


        /**
         * @member {module:model/SecupayTransactionProductModelUsedPaymentInstrument} used_payment_instrument
         */


        /**
         * A list of redirect urls used for the payment checkout page
         * @member {module:model/SecupayRedirectUrl} redirect_url
         */


        /**
         * The url of the payment checkout iframe
         * @member {String} iframe_url
         */


        /**
         * The container object
         * @member {module:model/PaymentContainersProductModel} container
         */


        /**
         * A list of sub-transactions (for mixed basket)
         * @member {Array.<module:model/SecupaySubTransactionProductModel>} sub_transactions
         */

    }]);

    return SecupayTransactionProductModel;
}();

exports.default = SecupayTransactionProductModel;