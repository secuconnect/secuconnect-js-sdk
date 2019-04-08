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
 * The SecupayTransactionProductModelUsedPaymentInstrument model module.
 * @module model/SecupayTransactionProductModelUsedPaymentInstrument
 */
var SecupayTransactionProductModelUsedPaymentInstrument = function () {
    /**
     * Constructs a new <code>SecupayTransactionProductModelUsedPaymentInstrument</code>.
     * The payment data which has the payer used (like bank account, credit card, ...). This data is always masked.
     * @alias module:model/SecupayTransactionProductModelUsedPaymentInstrument
     * @class
     */

    function SecupayTransactionProductModelUsedPaymentInstrument() {
        _classCallCheck(this, SecupayTransactionProductModelUsedPaymentInstrument);

        this.type = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductModelUsedPaymentInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModelUsedPaymentInstrument} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModelUsedPaymentInstrument} The populated <code>SecupayTransactionProductModelUsedPaymentInstrument</code> instance.
    */


    _createClass(SecupayTransactionProductModelUsedPaymentInstrument, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductModelUsedPaymentInstrument();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _BankAccountDescriptor2.default.constructFromObject(data['data']);
                }
            }
            return obj;
        }

        /**
         * The type of the payment instrument data, like: 'bank_account' or 'credit_card'
         * @member {String} type
         */


        /**
         * Holds the payment instrument data
         * @member {module:model/BankAccountDescriptor} data
         */

    }]);

    return SecupayTransactionProductModelUsedPaymentInstrument;
}();

exports.default = SecupayTransactionProductModelUsedPaymentInstrument;