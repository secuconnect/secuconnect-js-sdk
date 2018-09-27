'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentContractsRequestIdResultPayingAccount model module.
* @module model/PaymentContractsRequestIdResultPayingAccount
*/
var PaymentContractsRequestIdResultPayingAccount = function () {
    /**
    * Constructs a new <code>PaymentContractsRequestIdResultPayingAccount</code>.
    * The bank account you can use for pay in.
    * @alias module:model/PaymentContractsRequestIdResultPayingAccount
    * @class
    */

    function PaymentContractsRequestIdResultPayingAccount() {
        _classCallCheck(this, PaymentContractsRequestIdResultPayingAccount);

        this.accountowner = undefined;
        this.iban = undefined;
        this.bic = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsRequestIdResultPayingAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsRequestIdResultPayingAccount} obj Optional instance to populate.
    * @return {module:model/PaymentContractsRequestIdResultPayingAccount} The populated <code>PaymentContractsRequestIdResultPayingAccount</code> instance.
    */


    _createClass(PaymentContractsRequestIdResultPayingAccount, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsRequestIdResultPayingAccount();

                if (data.hasOwnProperty('accountowner')) {
                    obj['accountowner'] = _ApiClient2.default.convertToType(data['accountowner'], 'String');
                }
                if (data.hasOwnProperty('iban')) {
                    obj['iban'] = _ApiClient2.default.convertToType(data['iban'], 'String');
                }
                if (data.hasOwnProperty('bic')) {
                    obj['bic'] = _ApiClient2.default.convertToType(data['bic'], 'String');
                }
            }
            return obj;
        }

        /**
        * The bank account owner
        * @member {String} accountowner
        */

        /**
        * IBAN
        * @member {String} iban
        */

        /**
        * BIC
        * @member {String} bic
        */

    }]);

    return PaymentContractsRequestIdResultPayingAccount;
}();

exports.default = PaymentContractsRequestIdResultPayingAccount;