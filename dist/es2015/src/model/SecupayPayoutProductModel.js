'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

var _SecupayTransactionListItem = require('./SecupayTransactionListItem');

var _SecupayTransactionListItem2 = _interopRequireDefault(_SecupayTransactionListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SecupayPayoutProductModel model module.
 * @module model/SecupayPayoutProductModel
 */
var SecupayPayoutProductModel = function () {
    /**
     * Constructs a new <code>SecupayPayoutProductModel</code>.
     * @alias module:model/SecupayPayoutProductModel
     * @class
     */

    function SecupayPayoutProductModel() {
        _classCallCheck(this, SecupayPayoutProductModel);

        this.object = undefined;
        this.id = undefined;
        this.trans_id = undefined;
        this.status = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.purpose = undefined;
        this.order_id = undefined;
        this.transaction_status = undefined;
        this.transaction_list = undefined;
        this.transfer_purpose = undefined;
        this.transfer_account = undefined;
    }

    /**
    * Constructs a <code>SecupayPayoutProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayPayoutProductModel} obj Optional instance to populate.
    * @return {module:model/SecupayPayoutProductModel} The populated <code>SecupayPayoutProductModel</code> instance.
    */


    _createClass(SecupayPayoutProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayPayoutProductModel();

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
                if (data.hasOwnProperty('transaction_status')) {
                    obj['transaction_status'] = _ApiClient2.default.convertToType(data['transaction_status'], 'String');
                }
                if (data.hasOwnProperty('transaction_list')) {
                    obj['transaction_list'] = _ApiClient2.default.convertToType(data['transaction_list'], [_SecupayTransactionListItem2.default]);
                }
                if (data.hasOwnProperty('transfer_purpose')) {
                    obj['transfer_purpose'] = _ApiClient2.default.convertToType(data['transfer_purpose'], 'String');
                }
                if (data.hasOwnProperty('transfer_account')) {
                    obj['transfer_account'] = _PaymentInformation2.default.constructFromObject(data['transfer_account']);
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
         * ID of transaction
         * @member {Number} trans_id
         */


        /**
         * Transaction status
         * @member {String} status
         */


        /**
         * Total amount of transaction lit's items
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
         * Transaction status (number)
         * @member {String} transaction_status
         */


        /**
         * A list of transaction items
         * @member {Array.<module:model/SecupayTransactionListItem>} transaction_list
         */


        /**
         * The purpose the payer needs to use for his transfer
         * @member {String} transfer_purpose
         */


        /**
         * The bank account the payer needs to use for his transfer
         * @member {module:model/PaymentInformation} transfer_account
         */

    }]);

    return SecupayPayoutProductModel;
}();

exports.default = SecupayPayoutProductModel;