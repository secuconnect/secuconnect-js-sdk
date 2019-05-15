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
 * The SecupayTransactionCancelDTO model module.
 * @module model/SecupayTransactionCancelDTO
 */
var SecupayTransactionCancelDTO = function () {
    /**
     * Constructs a new <code>SecupayTransactionCancelDTO</code>.
     * @alias module:model/SecupayTransactionCancelDTO
     * @class
     */

    function SecupayTransactionCancelDTO() {
        _classCallCheck(this, SecupayTransactionCancelDTO);

        this.contract = undefined;
        this.amount = undefined;
        this.reduce_stakeholder_payment = false;
    }

    /**
    * Constructs a <code>SecupayTransactionCancelDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionCancelDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionCancelDTO} The populated <code>SecupayTransactionCancelDTO</code> instance.
    */


    _createClass(SecupayTransactionCancelDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionCancelDTO();

                if (data.hasOwnProperty('contract')) {
                    obj['contract'] = _ApiClient2.default.convertToType(data['contract'], Object);
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
         * The payment contract object
         * @member {Object} contract
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

    return SecupayTransactionCancelDTO;
}();

exports.default = SecupayTransactionCancelDTO;