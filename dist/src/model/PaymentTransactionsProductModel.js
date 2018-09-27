'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentTransactionsProductModelCustomer = require('./PaymentTransactionsProductModelCustomer');

var _PaymentTransactionsProductModelCustomer2 = _interopRequireDefault(_PaymentTransactionsProductModelCustomer);

var _PaymentTransactionsProductModelDetails = require('./PaymentTransactionsProductModelDetails');

var _PaymentTransactionsProductModelDetails2 = _interopRequireDefault(_PaymentTransactionsProductModelDetails);

var _PaymentTransactionsProductModelMerchant = require('./PaymentTransactionsProductModelMerchant');

var _PaymentTransactionsProductModelMerchant2 = _interopRequireDefault(_PaymentTransactionsProductModelMerchant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentTransactionsProductModel model module.
* @module model/PaymentTransactionsProductModel
*/
var PaymentTransactionsProductModel = function () {
    /**
    * Constructs a new <code>PaymentTransactionsProductModel</code>.
    * @alias module:model/PaymentTransactionsProductModel
    * @class
    */

    function PaymentTransactionsProductModel() {
        _classCallCheck(this, PaymentTransactionsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.trans_id = undefined;
        this.product_id = undefined;
        this.product = undefined;
        this.product_raw = undefined;
        this.zahlungsmittel_id = undefined;
        this.contract_id = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.created = undefined;
        this.updated = undefined;
        this.status = undefined;
        this.status_text = undefined;
        this.details = undefined;
        this.customer = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModel} The populated <code>PaymentTransactionsProductModel</code> instance.
    */


    _createClass(PaymentTransactionsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _PaymentTransactionsProductModelMerchant2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('trans_id')) {
                    obj['trans_id'] = _ApiClient2.default.convertToType(data['trans_id'], 'Number');
                }
                if (data.hasOwnProperty('product_id')) {
                    obj['product_id'] = _ApiClient2.default.convertToType(data['product_id'], 'Number');
                }
                if (data.hasOwnProperty('product')) {
                    obj['product'] = _ApiClient2.default.convertToType(data['product'], 'String');
                }
                if (data.hasOwnProperty('product_raw')) {
                    obj['product_raw'] = _ApiClient2.default.convertToType(data['product_raw'], 'String');
                }
                if (data.hasOwnProperty('zahlungsmittel_id')) {
                    obj['zahlungsmittel_id'] = _ApiClient2.default.convertToType(data['zahlungsmittel_id'], 'Number');
                }
                if (data.hasOwnProperty('contract_id')) {
                    obj['contract_id'] = _ApiClient2.default.convertToType(data['contract_id'], 'Number');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'Date');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'Number');
                }
                if (data.hasOwnProperty('status_text')) {
                    obj['status_text'] = _ApiClient2.default.convertToType(data['status_text'], 'String');
                }
                if (data.hasOwnProperty('details')) {
                    obj['details'] = _PaymentTransactionsProductModelDetails2.default.constructFromObject(data['details']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentTransactionsProductModelCustomer2.default.constructFromObject(data['customer']);
                }
            }
            return obj;
        }

        /**
        * Object of payment transaction
        * @member {String} object
        */

        /**
        * Id of payment transaction
        * @member {String} id
        */

        /**
        * @member {module:model/PaymentTransactionsProductModelMerchant} merchant
        */

        /**
        * Transaction identifier
        * @member {Number} trans_id
        */

        /**
        * Product identifier
        * @member {Number} product_id
        */

        /**
        * Product type
        * @member {String} product
        */

        /**
        * the name of the payment product
        * @member {String} product_raw
        */

        /**
        * The internal id of the stored payment instrument.
        * @member {Number} zahlungsmittel_id
        */

        /**
        * Contract identifier
        * @member {Number} contract_id
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
        * Created at date
        * @member {Date} created
        */

        /**
        * Updated at date
        * @member {Date} updated
        */

        /**
        * WTF??
        * @member {Number} status
        */

        /**
        * Transaction status
        * @member {String} status_text
        */

        /**
        * @member {module:model/PaymentTransactionsProductModelDetails} details
        */

        /**
        * @member {module:model/PaymentTransactionsProductModelCustomer} customer
        */

    }]);

    return PaymentTransactionsProductModel;
}();

exports.default = PaymentTransactionsProductModel;