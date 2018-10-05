'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyMerchantcardsDTOPaymentContainer model module.
* @module model/LoyaltyMerchantcardsDTOPaymentContainer
*/
var LoyaltyMerchantcardsDTOPaymentContainer = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOPaymentContainer</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOPaymentContainer
    * @class
    */

    function LoyaltyMerchantcardsDTOPaymentContainer() {
        _classCallCheck(this, LoyaltyMerchantcardsDTOPaymentContainer);

        this.object = undefined;
        this.id = undefined;
        this.type = undefined;
        this.payment_information = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOPaymentContainer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOPaymentContainer} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOPaymentContainer} The populated <code>LoyaltyMerchantcardsDTOPaymentContainer</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTOPaymentContainer, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTOPaymentContainer();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('payment_information')) {
                    obj['payment_information'] = _PaymentInformation2.default.constructFromObject(data['payment_information']);
                }
            }
            return obj;
        }

        /**
        * Object of payment container
        * @member {String} object
        */

        /**
        * Id of payment container
        * @member {String} id
        */

        /**
        * Type of payment container
        * @member {String} type
        */

        /**
        * Payment information
        * @member {module:model/PaymentInformation} payment_information
        */

    }]);

    return LoyaltyMerchantcardsDTOPaymentContainer;
}();

exports.default = LoyaltyMerchantcardsDTOPaymentContainer;