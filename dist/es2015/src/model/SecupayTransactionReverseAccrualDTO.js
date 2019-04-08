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
 * The SecupayTransactionReverseAccrualDTO model module.
 * @module model/SecupayTransactionReverseAccrualDTO
 */
var SecupayTransactionReverseAccrualDTO = function () {
    /**
     * Constructs a new <code>SecupayTransactionReverseAccrualDTO</code>.
     * @alias module:model/SecupayTransactionReverseAccrualDTO
     * @class
     */

    function SecupayTransactionReverseAccrualDTO() {
        _classCallCheck(this, SecupayTransactionReverseAccrualDTO);

        this.accrual = false;
    }

    /**
    * Constructs a <code>SecupayTransactionReverseAccrualDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionReverseAccrualDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionReverseAccrualDTO} The populated <code>SecupayTransactionReverseAccrualDTO</code> instance.
    */


    _createClass(SecupayTransactionReverseAccrualDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionReverseAccrualDTO();

                if (data.hasOwnProperty('accrual')) {
                    obj['accrual'] = _ApiClient2.default.convertToType(data['accrual'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE).
         * @member {Boolean} accrual
         * @default false
         */

    }]);

    return SecupayTransactionReverseAccrualDTO;
}();

exports.default = SecupayTransactionReverseAccrualDTO;