'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentCustomersProductModel = require('./PaymentCustomersProductModel');

var _PaymentCustomersProductModel2 = _interopRequireDefault(_PaymentCustomersProductModel);

var _SecupayBasketItem = require('./SecupayBasketItem');

var _SecupayBasketItem2 = _interopRequireDefault(_SecupayBasketItem);

var _SecupayTransactionProductDTOExperience = require('./SecupayTransactionProductDTOExperience');

var _SecupayTransactionProductDTOExperience2 = _interopRequireDefault(_SecupayTransactionProductDTOExperience);

var _SecupayTransactionProductDTOOptData = require('./SecupayTransactionProductDTOOptData');

var _SecupayTransactionProductDTOOptData2 = _interopRequireDefault(_SecupayTransactionProductDTOOptData);

var _SecupayTransactionProductDTORedirectUrl = require('./SecupayTransactionProductDTORedirectUrl');

var _SecupayTransactionProductDTORedirectUrl2 = _interopRequireDefault(_SecupayTransactionProductDTORedirectUrl);

var _SecupayTransactionProductDTOSubscription = require('./SecupayTransactionProductDTOSubscription');

var _SecupayTransactionProductDTOSubscription2 = _interopRequireDefault(_SecupayTransactionProductDTOSubscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SecupayTransactionProductDTO model module.
* @module model/SecupayTransactionProductDTO
*/
var SecupayTransactionProductDTO = function () {
    /**
    * Constructs a new <code>SecupayTransactionProductDTO</code>.
    * @alias module:model/SecupayTransactionProductDTO
    * @class
    */

    function SecupayTransactionProductDTO() {
        _classCallCheck(this, SecupayTransactionProductDTO);

        this.amount = undefined;
        this.currency = undefined;
        this.purpose = undefined;
        this.order_id = undefined;
        this.basket = undefined;
        this.accrual = undefined;
        this.payment_action = undefined;
        this.customer = undefined;
        this.redirect_url = undefined;
        this.contract = undefined;
        this.container = undefined;
        this.opt_data = undefined;
        this.subscription = undefined;
        this.demo = undefined;
        this.experience = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTO} The populated <code>SecupayTransactionProductDTO</code> instance.
    */


    _createClass(SecupayTransactionProductDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductDTO();

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
                if (data.hasOwnProperty('accrual')) {
                    obj['accrual'] = _ApiClient2.default.convertToType(data['accrual'], 'Boolean');
                }
                if (data.hasOwnProperty('payment_action')) {
                    obj['payment_action'] = _ApiClient2.default.convertToType(data['payment_action'], 'String');
                }
                if (data.hasOwnProperty('customer')) {
                    obj['customer'] = _PaymentCustomersProductModel2.default.constructFromObject(data['customer']);
                }
                if (data.hasOwnProperty('redirect_url')) {
                    obj['redirect_url'] = _SecupayTransactionProductDTORedirectUrl2.default.constructFromObject(data['redirect_url']);
                }
                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ApiClient2.default.convertToType(data['contract'], 'String');
                }
                if (data.hasOwnProperty('container')) {
                    obj['container'] = _ApiClient2.default.convertToType(data['container'], 'String');
                }
                if (data.hasOwnProperty('opt_data')) {
                    obj['opt_data'] = _SecupayTransactionProductDTOOptData2.default.constructFromObject(data['opt_data']);
                }
                if (data.hasOwnProperty('subscription')) {
                    obj['subscription'] = _SecupayTransactionProductDTOSubscription2.default.constructFromObject(data['subscription']);
                }
                if (data.hasOwnProperty('demo')) {
                    obj['demo'] = _ApiClient2.default.convertToType(data['demo'], 'Boolean');
                }
                if (data.hasOwnProperty('experience')) {
                    obj['experience'] = _SecupayTransactionProductDTOExperience2.default.constructFromObject(data['experience']);
                }
            }
            return obj;
        }

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
        * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
        * @member {Boolean} accrual
        */

        /**
        * Specifies whether a pre-authorization (\"authorization\") or instant payment (\"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
        * @member {String} payment_action
        */

        /**
        * The customer object
        * @member {module:model/PaymentCustomersProductModel} customer
        */

        /**
        * @member {module:model/SecupayTransactionProductDTORedirectUrl} redirect_url
        */

        /**
        * Contract id
        * @member {String} contract
        */

        /**
        * Container id
        * @member {String} container
        */

        /**
        * @member {module:model/SecupayTransactionProductDTOOptData} opt_data
        */

        /**
        * @member {module:model/SecupayTransactionProductDTOSubscription} subscription
        */

        /**
        * Demo
        * @member {Boolean} demo
        */

        /**
        * @member {module:model/SecupayTransactionProductDTOExperience} experience
        */

    }]);

    return SecupayTransactionProductDTO;
}();

exports.default = SecupayTransactionProductDTO;