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
* The SecupayTransactionProductModelTransferAccount model module.
* @module model/SecupayTransactionProductModelTransferAccount
*/
var SecupayTransactionProductModelTransferAccount = function () {
    /**
    * Constructs a new <code>SecupayTransactionProductModelTransferAccount</code>.
    * The bank account the payer needs to use for his transfer
    * @alias module:model/SecupayTransactionProductModelTransferAccount
    * @class
    */

    function SecupayTransactionProductModelTransferAccount() {
        _classCallCheck(this, SecupayTransactionProductModelTransferAccount);

        this.iban = undefined;
        this.bic = undefined;
        this.accountnumber = undefined;
        this.bankcode = undefined;
        this.account_owner = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductModelTransferAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModelTransferAccount} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModelTransferAccount} The populated <code>SecupayTransactionProductModelTransferAccount</code> instance.
    */


    _createClass(SecupayTransactionProductModelTransferAccount, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductModelTransferAccount();

                if (data.hasOwnProperty('iban')) {
                    obj['iban'] = _ApiClient2.default.convertToType(data['iban'], 'String');
                }
                if (data.hasOwnProperty('bic')) {
                    obj['bic'] = _ApiClient2.default.convertToType(data['bic'], 'String');
                }
                if (data.hasOwnProperty('accountnumber')) {
                    obj['accountnumber'] = _ApiClient2.default.convertToType(data['accountnumber'], 'String');
                }
                if (data.hasOwnProperty('bankcode')) {
                    obj['bankcode'] = _ApiClient2.default.convertToType(data['bankcode'], 'String');
                }
                if (data.hasOwnProperty('account_owner')) {
                    obj['account_owner'] = _ApiClient2.default.convertToType(data['account_owner'], 'String');
                }
            }
            return obj;
        }

        /**
        * IBAN
        * @member {String} iban
        */

        /**
        * BIC
        * @member {String} bic
        */

        /**
        * Bank account number
        * @member {String} accountnumber
        */

        /**
        * The name of the bank institute
        * @member {String} bankcode
        */

        /**
        * The owner of bank account
        * @member {String} account_owner
        */

    }]);

    return SecupayTransactionProductModelTransferAccount;
}();

exports.default = SecupayTransactionProductModelTransferAccount;