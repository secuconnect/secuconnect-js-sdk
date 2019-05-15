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
 * The SmartTransactionsCheckoutLinks model module.
 * @module model/SmartTransactionsCheckoutLinks
 */
var SmartTransactionsCheckoutLinks = function () {
    /**
     * Constructs a new <code>SmartTransactionsCheckoutLinks</code>.
     * @alias module:model/SmartTransactionsCheckoutLinks
     * @class
     */

    function SmartTransactionsCheckoutLinks() {
        _classCallCheck(this, SmartTransactionsCheckoutLinks);

        this.url_success = undefined;
        this.url_failure = undefined;
        this.url_abort = undefined;
        this.url_error = undefined;
        this.url_checkout = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsCheckoutLinks</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsCheckoutLinks} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsCheckoutLinks} The populated <code>SmartTransactionsCheckoutLinks</code> instance.
    */


    _createClass(SmartTransactionsCheckoutLinks, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsCheckoutLinks();

                if (data.hasOwnProperty('url_success')) {
                    obj['url_success'] = _ApiClient2.default.convertToType(data['url_success'], 'String');
                }
                if (data.hasOwnProperty('url_failure')) {
                    obj['url_failure'] = _ApiClient2.default.convertToType(data['url_failure'], 'String');
                }
                if (data.hasOwnProperty('url_abort')) {
                    obj['url_abort'] = _ApiClient2.default.convertToType(data['url_abort'], 'String');
                }
                if (data.hasOwnProperty('url_error')) {
                    obj['url_error'] = _ApiClient2.default.convertToType(data['url_error'], 'String');
                }
                if (data.hasOwnProperty('url_checkout')) {
                    obj['url_checkout'] = _ApiClient2.default.convertToType(data['url_checkout'], 'String');
                }
            }
            return obj;
        }

        /**
         * Success URL
         * @member {String} url_success
         */


        /**
         * Failure URL
         * @member {String} url_failure
         */


        /**
         * Abort URL
         * @member {String} url_abort
         */


        /**
         * Error URL
         * @member {String} url_error
         */


        /**
         * Smart Checkout URL
         * @member {String} url_checkout
         */

    }]);

    return SmartTransactionsCheckoutLinks;
}();

exports.default = SmartTransactionsCheckoutLinks;