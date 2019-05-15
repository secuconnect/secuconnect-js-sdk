'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PaymentContractsDTOClone model module.
 * @module model/PaymentContractsDTOClone
 */
var PaymentContractsDTOClone = function () {
    /**
     * Constructs a new <code>PaymentContractsDTOClone</code>.
     * @alias module:model/PaymentContractsDTOClone
     * @class
     */

    function PaymentContractsDTOClone() {
        _classCallCheck(this, PaymentContractsDTOClone);

        this.project = undefined;
        this.payment_data = undefined;
        this.payin_account = false;
        this.url_push = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsDTOClone</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTOClone} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTOClone} The populated <code>PaymentContractsDTOClone</code> instance.
    */


    _createClass(PaymentContractsDTOClone, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsDTOClone();

                if (data.hasOwnProperty('project')) {
                    obj['project'] = _ApiClient2.default.convertToType(data['project'], 'String');
                }
                if (data.hasOwnProperty('payment_data')) {
                    obj['payment_data'] = _PaymentInformation2.default.constructFromObject(data['payment_data']);
                }
                if (data.hasOwnProperty('payin_account')) {
                    obj['payin_account'] = _ApiClient2.default.convertToType(data['payin_account'], 'Boolean');
                }
                if (data.hasOwnProperty('url_push')) {
                    obj['url_push'] = _ApiClient2.default.convertToType(data['url_push'], 'String');
                }
            }
            return obj;
        }

        /**
         * Name of the project (must be unique)
         * @member {String} project
         */


        /**
         * Merchants bank account for the payout
         * @member {module:model/PaymentInformation} payment_data
         */


        /**
         * Pay in account
         * @member {Boolean} payin_account
         * @default false
         */


        /**
         * The default URL where your service listen for push notifications of the secuconnect service
         * @member {String} url_push
         */

    }]);

    return PaymentContractsDTOClone;
}();

exports.default = PaymentContractsDTOClone;