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
* The ProductExceptionPayload model module.
* @module model/ProductExceptionPayload
*/
var ProductExceptionPayload = function () {
    /**
    * Constructs a new <code>ProductExceptionPayload</code>.
    * Payload of exceptions returned by API
    * @alias module:model/ProductExceptionPayload
    * @class
    */

    function ProductExceptionPayload() {
        _classCallCheck(this, ProductExceptionPayload);

        this.status = undefined;
        this.error = undefined;
        this.error_details = undefined;
        this.error_user = undefined;
        this.code = undefined;
        this.supportId = undefined;
    }

    /**
    * Constructs a <code>ProductExceptionPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductExceptionPayload} obj Optional instance to populate.
    * @return {module:model/ProductExceptionPayload} The populated <code>ProductExceptionPayload</code> instance.
    */


    _createClass(ProductExceptionPayload, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProductExceptionPayload();

                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('error')) {
                    obj['error'] = _ApiClient2.default.convertToType(data['error'], 'String');
                }
                if (data.hasOwnProperty('error_details')) {
                    obj['error_details'] = _ApiClient2.default.convertToType(data['error_details'], 'String');
                }
                if (data.hasOwnProperty('error_user')) {
                    obj['error_user'] = _ApiClient2.default.convertToType(data['error_user'], 'String');
                }
                if (data.hasOwnProperty('code')) {
                    obj['code'] = _ApiClient2.default.convertToType(data['code'], 'String');
                }
                if (data.hasOwnProperty('supportId')) {
                    obj['supportId'] = _ApiClient2.default.convertToType(data['supportId'], 'String');
                }
            }
            return obj;
        }

        /**
        * Request status (always equals to 'error')
        * @member {String} status
        */

        /**
        * Error type identifier
        * @member {String} error
        */

        /**
        * Error details
        * @member {String} error_details
        */

        /**
        * Error details in German
        * @member {String} error_user
        */

        /**
        * HTTP code corresponding to error
        * @member {String} code
        */

        /**
        * ID by which support team can relate error with action(s) that caused it
        * @member {String} supportId
        */

    }]);

    return ProductExceptionPayload;
}();

exports.default = ProductExceptionPayload;