'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentContractsProductModel = require('./PaymentContractsProductModel');

var _PaymentContractsProductModel2 = _interopRequireDefault(_PaymentContractsProductModel);

var _PaymentContractsRequestIdResultPayingAccount = require('./PaymentContractsRequestIdResultPayingAccount');

var _PaymentContractsRequestIdResultPayingAccount2 = _interopRequireDefault(_PaymentContractsRequestIdResultPayingAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PaymentContractsRequestIdResult model module.
* @module model/PaymentContractsRequestIdResult
*/
var PaymentContractsRequestIdResult = function () {
    /**
    * Constructs a new <code>PaymentContractsRequestIdResult</code>.
    * @alias module:model/PaymentContractsRequestIdResult
    * @class
    */

    function PaymentContractsRequestIdResult() {
        _classCallCheck(this, PaymentContractsRequestIdResult);

        this.contract = undefined;
        this.apikey = undefined;
        this.paying_account = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsRequestIdResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsRequestIdResult} obj Optional instance to populate.
    * @return {module:model/PaymentContractsRequestIdResult} The populated <code>PaymentContractsRequestIdResult</code> instance.
    */


    _createClass(PaymentContractsRequestIdResult, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsRequestIdResult();

                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _PaymentContractsProductModel2.default.constructFromObject(data['contract']);
                }
                if (data.hasOwnProperty('apikey')) {
                    obj['apikey'] = _ApiClient2.default.convertToType(data['apikey'], 'String');
                }
                if (data.hasOwnProperty('paying_account')) {
                    obj['paying_account'] = _PaymentContractsRequestIdResultPayingAccount2.default.constructFromObject(data['paying_account']);
                }
            }
            return obj;
        }

        /**
        * The payment contract object
        * @member {module:model/PaymentContractsProductModel} contract
        */

        /**
        * Returns the apikey of the created merchant
        * @member {String} apikey
        */

        /**
        * @member {module:model/PaymentContractsRequestIdResultPayingAccount} paying_account
        */

    }]);

    return PaymentContractsRequestIdResult;
}();

exports.default = PaymentContractsRequestIdResult;