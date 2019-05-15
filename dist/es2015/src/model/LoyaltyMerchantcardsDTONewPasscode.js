'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyMerchantcardsDTOValidateMerchantCard = require('./LoyaltyMerchantcardsDTOValidateMerchantCard');

var _LoyaltyMerchantcardsDTOValidateMerchantCard2 = _interopRequireDefault(_LoyaltyMerchantcardsDTOValidateMerchantCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyMerchantcardsDTONewPasscode model module.
 * @module model/LoyaltyMerchantcardsDTONewPasscode
 */
var LoyaltyMerchantcardsDTONewPasscode = function () {
  /**
   * Constructs a new <code>LoyaltyMerchantcardsDTONewPasscode</code>.
   * @alias module:model/LoyaltyMerchantcardsDTONewPasscode
   * @class
   * @implements module:model/LoyaltyMerchantcardsDTOValidateMerchantCard
   */

  function LoyaltyMerchantcardsDTONewPasscode() {
    _classCallCheck(this, LoyaltyMerchantcardsDTONewPasscode);

    this.passcode = undefined;
    this.merchant = undefined;
    this.cardnumber = undefined;


    _LoyaltyMerchantcardsDTOValidateMerchantCard2.default.call(this);
  }

  /**
  * Constructs a <code>LoyaltyMerchantcardsDTONewPasscode</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/LoyaltyMerchantcardsDTONewPasscode} obj Optional instance to populate.
  * @return {module:model/LoyaltyMerchantcardsDTONewPasscode} The populated <code>LoyaltyMerchantcardsDTONewPasscode</code> instance.
  */


  _createClass(LoyaltyMerchantcardsDTONewPasscode, null, [{
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyMerchantcardsDTONewPasscode();

        _LoyaltyMerchantcardsDTOValidateMerchantCard2.default.constructFromObject(data, obj);
        if (data.hasOwnProperty('passcode')) {
          obj['passcode'] = _ApiClient2.default.convertToType(data['passcode'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Loyalty Card passcode
     * @member {Number} passcode
     */


    // Implement LoyaltyMerchantcardsDTOValidateMerchantCard interface:

    /**
     * General Merchant id
     * @member {String} merchant
     */


    /**
     * Loyalty Card number
     * @member {Number} cardnumber
     */

  }]);

  return LoyaltyMerchantcardsDTONewPasscode;
}();

exports.default = LoyaltyMerchantcardsDTONewPasscode;