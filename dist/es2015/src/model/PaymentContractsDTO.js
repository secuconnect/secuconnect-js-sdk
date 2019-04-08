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
 * The PaymentContractsDTO model module.
 * @module model/PaymentContractsDTO
 */
var PaymentContractsDTO = function () {
    /**
     * Constructs a new <code>PaymentContractsDTO</code>.
     * @alias module:model/PaymentContractsDTO
     * @class
     */

    function PaymentContractsDTO() {
        _classCallCheck(this, PaymentContractsDTO);

        this.merchant = undefined;
        this.internal_reference = undefined;
        this.contract_id = undefined;
        this.demo = undefined;
        this.url_push = undefined;
        this.unique_order_id = undefined;
        this.scoring = undefined;
    }

    /**
    * Constructs a <code>PaymentContractsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTO} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTO} The populated <code>PaymentContractsDTO</code> instance.
    */


    _createClass(PaymentContractsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContractsDTO();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('internal_reference')) {
                    obj['internal_reference'] = _ApiClient2.default.convertToType(data['internal_reference'], 'String');
                }
                if (data.hasOwnProperty('contract_id')) {
                    obj['contract_id'] = _ApiClient2.default.convertToType(data['contract_id'], 'String');
                }
                if (data.hasOwnProperty('demo')) {
                    obj['demo'] = _ApiClient2.default.convertToType(data['demo'], 'String');
                }
                if (data.hasOwnProperty('url_push')) {
                    obj['url_push'] = _ApiClient2.default.convertToType(data['url_push'], 'String');
                }
                if (data.hasOwnProperty('unique_order_id')) {
                    obj['unique_order_id'] = _ApiClient2.default.convertToType(data['unique_order_id'], 'Boolean');
                }
                if (data.hasOwnProperty('scoring')) {
                    obj['scoring'] = _ApiClient2.default.convertToType(data['scoring'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Contracts Merchant
         * @member {String} merchant
         */


        /**
         * The internal user id
         * @member {String} internal_reference
         */


        /**
         * Contracts id
         * @member {String} contract_id
         */


        /**
         * Is this a demo contract
         * @member {String} demo
         */


        /**
         * An URL where your service listen for push notifications of the secuconnect service
         * @member {String} url_push
         */


        /**
         * Bool, default FALSE. If TRUE, an error message will be thrown if you try to create a new payment transaction with the same order_id of an previous transaction.
         * @member {Boolean} unique_order_id
         */


        /**
         * Bool, default TRUE. If FALSE, the customer scoring is disabled for your payment contract
         * @member {Boolean} scoring
         */

    }]);

    return PaymentContractsDTO;
}();

exports.default = PaymentContractsDTO;