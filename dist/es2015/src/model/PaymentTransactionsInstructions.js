'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _BankAccountDescriptor = require('./BankAccountDescriptor');

var _BankAccountDescriptor2 = _interopRequireDefault(_BankAccountDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentTransactionsInstructions model module.
 * @module model/PaymentTransactionsInstructions
 */
var PaymentTransactionsInstructions = function () {
    /**
     * Constructs a new <code>PaymentTransactionsInstructions</code>.
     * @alias module:model/PaymentTransactionsInstructions
     * @class
     */

    function PaymentTransactionsInstructions() {
        _classCallCheck(this, PaymentTransactionsInstructions);

        this.lang = undefined;
        this.amount = undefined;
        this.currency = undefined;
        this.payment = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsInstructions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsInstructions} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsInstructions} The populated <code>PaymentTransactionsInstructions</code> instance.
    */


    _createClass(PaymentTransactionsInstructions, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsInstructions();

                if (data.hasOwnProperty('lang')) {
                    obj['lang'] = _ApiClient2.default.convertToType(data['lang'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('payment')) {
                    obj['payment'] = _BankAccountDescriptor2.default.constructFromObject(data['payment']);
                }
            }
            return obj;
        }

        /**
         * Language
         * @member {String} lang
         */


        /**
         * Amount
         * @member {Number} amount
         */


        /**
         * Currency
         * @member {String} currency
         */


        /**
         * Payment data
         * @member {module:model/BankAccountDescriptor} payment
         */

    }]);

    return PaymentTransactionsInstructions;
}();

exports.default = PaymentTransactionsInstructions;