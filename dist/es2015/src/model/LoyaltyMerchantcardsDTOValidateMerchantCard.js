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
 * The LoyaltyMerchantcardsDTOValidateMerchantCard model module.
 * @module model/LoyaltyMerchantcardsDTOValidateMerchantCard
 */
var LoyaltyMerchantcardsDTOValidateMerchantCard = function () {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code>.
     * @alias module:model/LoyaltyMerchantcardsDTOValidateMerchantCard
     * @class
     */

    function LoyaltyMerchantcardsDTOValidateMerchantCard() {
        _classCallCheck(this, LoyaltyMerchantcardsDTOValidateMerchantCard);

        this.merchant = undefined;
        this.cardnumber = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} The populated <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTOValidateMerchantCard, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTOValidateMerchantCard();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'Number');
                }
            }
            return obj;
        }

        /**
         * General Merchant id
         * @member {String} merchant
         */


        /**
         * Loyalty Card number
         * @member {Number} cardnumber
         */

    }]);

    return LoyaltyMerchantcardsDTOValidateMerchantCard;
}();

exports.default = LoyaltyMerchantcardsDTOValidateMerchantCard;