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
* The PaymentTransactionsShippingUrl model module.
* @module model/PaymentTransactionsShippingUrl
*/
var PaymentTransactionsShippingUrl = function () {
    /**
    * Constructs a new <code>PaymentTransactionsShippingUrl</code>.
    * @alias module:model/PaymentTransactionsShippingUrl
    * @class
    */

    function PaymentTransactionsShippingUrl() {
        _classCallCheck(this, PaymentTransactionsShippingUrl);

        this.url = undefined;
    }

    /**
    * Constructs a <code>PaymentTransactionsShippingUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsShippingUrl} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsShippingUrl} The populated <code>PaymentTransactionsShippingUrl</code> instance.
    */


    _createClass(PaymentTransactionsShippingUrl, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PaymentTransactionsShippingUrl();

                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
            }
            return obj;
        }

        /**
        * The url of the shipping information form
        * @member {String} url
        */

    }]);

    return PaymentTransactionsShippingUrl;
}();

exports.default = PaymentTransactionsShippingUrl;