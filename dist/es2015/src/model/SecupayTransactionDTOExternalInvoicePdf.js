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
 * The SecupayTransactionDTOExternalInvoicePdf model module.
 * @module model/SecupayTransactionDTOExternalInvoicePdf
 */
var SecupayTransactionDTOExternalInvoicePdf = function () {
    /**
     * Constructs a new <code>SecupayTransactionDTOExternalInvoicePdf</code>.
     * @alias module:model/SecupayTransactionDTOExternalInvoicePdf
     * @class
     */

    function SecupayTransactionDTOExternalInvoicePdf() {
        _classCallCheck(this, SecupayTransactionDTOExternalInvoicePdf);

        this.update_existing = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionDTOExternalInvoicePdf</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionDTOExternalInvoicePdf} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionDTOExternalInvoicePdf} The populated <code>SecupayTransactionDTOExternalInvoicePdf</code> instance.
    */


    _createClass(SecupayTransactionDTOExternalInvoicePdf, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionDTOExternalInvoicePdf();

                if (data.hasOwnProperty('update_existing')) {
                    obj['update_existing'] = _ApiClient2.default.convertToType(data['update_existing'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Update existing invoice PDF
         * @member {Boolean} update_existing
         */

    }]);

    return SecupayTransactionDTOExternalInvoicePdf;
}();

exports.default = SecupayTransactionDTOExternalInvoicePdf;