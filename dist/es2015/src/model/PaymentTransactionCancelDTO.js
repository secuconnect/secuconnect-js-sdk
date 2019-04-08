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
 * The PaymentTransactionCancelDTO model module.
 * @module model/PaymentTransactionCancelDTO
 */
var PaymentTransactionCancelDTO = function () {
    /**
     * Constructs a new <code>PaymentTransactionCancelDTO</code>.
     * @alias module:model/PaymentTransactionCancelDTO
     * @class
     */

    function PaymentTransactionCancelDTO() {
        _classCallCheck(this, PaymentTransactionCancelDTO);

        this.reason = undefined;
        this.amount = undefined;
        this.reduce_stakeholder_payment = false;
    }

    /**
    * Constructs a <code>PaymentTransactionCancelDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionCancelDTO} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionCancelDTO} The populated <code>PaymentTransactionCancelDTO</code> instance.
    */


    _createClass(PaymentTransactionCancelDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionCancelDTO();

                if (data.hasOwnProperty('reason')) {
                    obj['reason'] = _ApiClient2.default.convertToType(data['reason'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('reduce_stakeholder_payment')) {
                    obj['reduce_stakeholder_payment'] = _ApiClient2.default.convertToType(data['reduce_stakeholder_payment'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * The reason of this cancel or refund
         * @member {String} reason
         */


        /**
         * partial or full refund amount, \"0\" means full refund
         * @member {Number} amount
         */


        /**
         * Mixed-Basket: (percentage) reduce the stakeholder amount too
         * @member {Boolean} reduce_stakeholder_payment
         * @default false
         */

    }]);

    return PaymentTransactionCancelDTO;
}();

exports.default = PaymentTransactionCancelDTO;