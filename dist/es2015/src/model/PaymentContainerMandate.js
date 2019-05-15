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
 * The PaymentContainerMandate model module.
 * @module model/PaymentContainerMandate
 */
var PaymentContainerMandate = function () {
    /**
     * Constructs a new <code>PaymentContainerMandate</code>.
     * @alias module:model/PaymentContainerMandate
     * @class
     */

    function PaymentContainerMandate() {
        _classCallCheck(this, PaymentContainerMandate);

        this.sepa_mandate_id = undefined;
        this.iban = undefined;
        this.bic = undefined;
        this.type = undefined;
        this.status = undefined;
        this.identification = undefined;
    }

    /**
    * Constructs a <code>PaymentContainerMandate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainerMandate} obj Optional instance to populate.
    * @return {module:model/PaymentContainerMandate} The populated <code>PaymentContainerMandate</code> instance.
    */


    _createClass(PaymentContainerMandate, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentContainerMandate();

                if (data.hasOwnProperty('sepa_mandate_id')) {
                    obj['sepa_mandate_id'] = _ApiClient2.default.convertToType(data['sepa_mandate_id'], 'String');
                }
                if (data.hasOwnProperty('iban')) {
                    obj['iban'] = _ApiClient2.default.convertToType(data['iban'], 'String');
                }
                if (data.hasOwnProperty('bic')) {
                    obj['bic'] = _ApiClient2.default.convertToType(data['bic'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('identification')) {
                    obj['identification'] = _ApiClient2.default.convertToType(data['identification'], 'String');
                }
            }
            return obj;
        }

        /**
         * Sepa mandate id
         * @member {String} sepa_mandate_id
         */


        /**
         * IBAN
         * @member {String} iban
         */


        /**
         * BIC
         * @member {String} bic
         */


        /**
         * Type
         * @member {String} type
         */


        /**
         * Status
         * @member {String} status
         */


        /**
         * Identification
         * @member {String} identification
         */

    }]);

    return PaymentContainerMandate;
}();

exports.default = PaymentContainerMandate;