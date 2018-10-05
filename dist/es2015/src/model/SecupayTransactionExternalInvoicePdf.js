'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SecupayTransactionExternalInvoicePdfDocument = require('./SecupayTransactionExternalInvoicePdfDocument');

var _SecupayTransactionExternalInvoicePdfDocument2 = _interopRequireDefault(_SecupayTransactionExternalInvoicePdfDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SecupayTransactionExternalInvoicePdf model module.
* @module model/SecupayTransactionExternalInvoicePdf
*/
var SecupayTransactionExternalInvoicePdf = function () {
    /**
    * Constructs a new <code>SecupayTransactionExternalInvoicePdf</code>.
    * @alias module:model/SecupayTransactionExternalInvoicePdf
    * @class
    */

    function SecupayTransactionExternalInvoicePdf() {
        _classCallCheck(this, SecupayTransactionExternalInvoicePdf);

        this.document = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionExternalInvoicePdf</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionExternalInvoicePdf} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionExternalInvoicePdf} The populated <code>SecupayTransactionExternalInvoicePdf</code> instance.
    */


    _createClass(SecupayTransactionExternalInvoicePdf, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionExternalInvoicePdf();

                if (data.hasOwnProperty('document')) {
                    obj['document'] = _SecupayTransactionExternalInvoicePdfDocument2.default.constructFromObject(data['document']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/SecupayTransactionExternalInvoicePdfDocument} document
        */

    }]);

    return SecupayTransactionExternalInvoicePdf;
}();

exports.default = SecupayTransactionExternalInvoicePdf;