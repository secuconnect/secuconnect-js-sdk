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
* The LoyaltyMerchantcardsDTOResetPasscode model module.
* @module model/LoyaltyMerchantcardsDTOResetPasscode
*/
var LoyaltyMerchantcardsDTOResetPasscode = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOResetPasscode</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOResetPasscode
    * @class
    */

    function LoyaltyMerchantcardsDTOResetPasscode() {
        _classCallCheck(this, LoyaltyMerchantcardsDTOResetPasscode);

        this.cardnumber = undefined;
        this.passcode = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOResetPasscode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOResetPasscode} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOResetPasscode} The populated <code>LoyaltyMerchantcardsDTOResetPasscode</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTOResetPasscode, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTOResetPasscode();

                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'Number');
                }
                if (data.hasOwnProperty('passcode')) {
                    obj['passcode'] = _ApiClient2.default.convertToType(data['passcode'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Loyalty Card number
        * @member {Number} cardnumber
        */

        /**
        * Loyalty Card passcode
        * @member {Number} passcode
        */

    }]);

    return LoyaltyMerchantcardsDTOResetPasscode;
}();

exports.default = LoyaltyMerchantcardsDTOResetPasscode;