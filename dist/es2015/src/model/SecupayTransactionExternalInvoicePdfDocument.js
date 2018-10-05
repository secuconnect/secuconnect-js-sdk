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
* The SecupayTransactionExternalInvoicePdfDocument model module.
* @module model/SecupayTransactionExternalInvoicePdfDocument
*/
var SecupayTransactionExternalInvoicePdfDocument = function () {
    /**
    * Constructs a new <code>SecupayTransactionExternalInvoicePdfDocument</code>.
    * Information about the saved document
    * @alias module:model/SecupayTransactionExternalInvoicePdfDocument
    * @class
    */

    function SecupayTransactionExternalInvoicePdfDocument() {
        _classCallCheck(this, SecupayTransactionExternalInvoicePdfDocument);

        this.id = undefined;
        this.mime_type = undefined;
        this.name = undefined;
        this.size = undefined;
        this.url = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionExternalInvoicePdfDocument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionExternalInvoicePdfDocument} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionExternalInvoicePdfDocument} The populated <code>SecupayTransactionExternalInvoicePdfDocument</code> instance.
    */


    _createClass(SecupayTransactionExternalInvoicePdfDocument, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionExternalInvoicePdfDocument();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('mime_type')) {
                    obj['mime_type'] = _ApiClient2.default.convertToType(data['mime_type'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('size')) {
                    obj['size'] = _ApiClient2.default.convertToType(data['size'], 'Number');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
            }
            return obj;
        }

        /**
        * The Document File ID
        * @member {String} id
        */

        /**
        * The MIME Type
        * @member {String} mime_type
        */

        /**
        * The file name
        * @member {String} name
        */

        /**
        * The size of the file in bytes
        * @member {Number} size
        */

        /**
        * The download-url to this file
        * @member {String} url
        */

    }]);

    return SecupayTransactionExternalInvoicePdfDocument;
}();

exports.default = SecupayTransactionExternalInvoicePdfDocument;