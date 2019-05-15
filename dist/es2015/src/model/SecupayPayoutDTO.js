'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _SecupayPayoutDTOOptData = require('./SecupayPayoutDTOOptData');

var _SecupayPayoutDTOOptData2 = _interopRequireDefault(_SecupayPayoutDTOOptData);

var _SecupayRedirectUrl = require('./SecupayRedirectUrl');

var _SecupayRedirectUrl2 = _interopRequireDefault(_SecupayRedirectUrl);

var _SecupayTransactionListItem = require('./SecupayTransactionListItem');

var _SecupayTransactionListItem2 = _interopRequireDefault(_SecupayTransactionListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SecupayPayoutDTO model module.
 * @module model/SecupayPayoutDTO
 */
var SecupayPayoutDTO = function () {
    /**
     * Constructs a new <code>SecupayPayoutDTO</code>.
     * @alias module:model/SecupayPayoutDTO
     * @class
     */

    function SecupayPayoutDTO() {
        _classCallCheck(this, SecupayPayoutDTO);

        this.demo = undefined;
        this.redirect_url = undefined;
        this.customer = undefined;
        this.opt_data = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.purpose = undefined;
        this.order_id = undefined;
        this.transaction_list = undefined;
    }

    /**
    * Constructs a <code>SecupayPayoutDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayPayoutDTO} obj Optional instance to populate.
    * @return {module:model/SecupayPayoutDTO} The populated <code>SecupayPayoutDTO</code> instance.
    */


    _createClass(SecupayPayoutDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayPayoutDTO();

                if (data.hasOwnProperty('demo')) {
                    obj['demo'] = _ApiClient2.default.convertToType(data['demo'], 'Number');
                }
                if (data.hasOwnProperty('redirect_url')) {
                    obj['redirect_url'] = _SecupayRedirectUrl2.default.constructFromObject(data['redirect_url']);
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('opt_data')) {
                    obj['opt_data'] = _SecupayPayoutDTOOptData2.default.constructFromObject(data['opt_data']);
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
                if (data.hasOwnProperty('transaction_list')) {
                    obj['transaction_list'] = _ApiClient2.default.convertToType(data['transaction_list'], [_SecupayTransactionListItem2.default]);
                }
            }
            return obj;
        }

        /**
         * demo env value
         * @member {Number} demo
         */


        /**
         * A list of redirect urls used for the payment checkout page
         * @member {module:model/SecupayRedirectUrl} redirect_url
         */


        /**
         * The customer object
         * @member {module:model/PaymentCustomersProductModel} customer
         */


        /**
         * @member {module:model/SecupayPayoutDTOOptData} opt_data
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
         * A list of transaction items
         * @member {Array.<module:model/SecupayTransactionListItem>} transaction_list
         */

    }]);

    return SecupayPayoutDTO;
}();

exports.default = SecupayPayoutDTO;