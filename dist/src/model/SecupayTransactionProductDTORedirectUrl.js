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
* The SecupayTransactionProductDTORedirectUrl model module.
* @module model/SecupayTransactionProductDTORedirectUrl
*/
var SecupayTransactionProductDTORedirectUrl = function () {
    /**
    * Constructs a new <code>SecupayTransactionProductDTORedirectUrl</code>.
    * A list of redirect urls used for the payment checkout page
    * @alias module:model/SecupayTransactionProductDTORedirectUrl
    * @class
    */

    function SecupayTransactionProductDTORedirectUrl() {
        _classCallCheck(this, SecupayTransactionProductDTORedirectUrl);

        this.url_success = undefined;
        this.url_failure = undefined;
        this.url_push = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTORedirectUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTORedirectUrl} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTORedirectUrl} The populated <code>SecupayTransactionProductDTORedirectUrl</code> instance.
    */


    _createClass(SecupayTransactionProductDTORedirectUrl, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductDTORedirectUrl();

                if (data.hasOwnProperty('url_success')) {
                    obj['url_success'] = _ApiClient2.default.convertToType(data['url_success'], 'String');
                }
                if (data.hasOwnProperty('url_failure')) {
                    obj['url_failure'] = _ApiClient2.default.convertToType(data['url_failure'], 'String');
                }
                if (data.hasOwnProperty('url_push')) {
                    obj['url_push'] = _ApiClient2.default.convertToType(data['url_push'], 'String');
                }
            }
            return obj;
        }

        /**
        * After successfully entering the cash data of the payer is returned to this page.
        * @member {String} url_success
        */

        /**
        * After canceling or on errors the payer will be redirected to this page and can select there an another payment method.
        * @member {String} url_failure
        */

        /**
        * The secupay system will be send status change notifications to this URL.
        * @member {String} url_push
        */

    }]);

    return SecupayTransactionProductDTORedirectUrl;
}();

exports.default = SecupayTransactionProductDTORedirectUrl;