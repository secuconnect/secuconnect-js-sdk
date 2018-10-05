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
* The LoyaltyMerchantcardsValidateMerchantCard model module.
* @module model/LoyaltyMerchantcardsValidateMerchantCard
*/
var LoyaltyMerchantcardsValidateMerchantCard = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsValidateMerchantCard</code>.
    * @alias module:model/LoyaltyMerchantcardsValidateMerchantCard
    * @class
    */

    function LoyaltyMerchantcardsValidateMerchantCard() {
        _classCallCheck(this, LoyaltyMerchantcardsValidateMerchantCard);

        this.isValid = undefined;
        this.hasPasscode = undefined;
        this.isLocked = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsValidateMerchantCard</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsValidateMerchantCard} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsValidateMerchantCard} The populated <code>LoyaltyMerchantcardsValidateMerchantCard</code> instance.
    */


    _createClass(LoyaltyMerchantcardsValidateMerchantCard, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsValidateMerchantCard();

                if (data.hasOwnProperty('isValid')) {
                    obj['isValid'] = _ApiClient2.default.convertToType(data['isValid'], 'Boolean');
                }
                if (data.hasOwnProperty('hasPasscode')) {
                    obj['hasPasscode'] = _ApiClient2.default.convertToType(data['hasPasscode'], 'Boolean');
                }
                if (data.hasOwnProperty('isLocked')) {
                    obj['isLocked'] = _ApiClient2.default.convertToType(data['isLocked'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * Result has true or false value
        * @member {Boolean} isValid
        */

        /**
        * Result has true or false value
        * @member {Boolean} hasPasscode
        */

        /**
        * Result has true or false value
        * @member {Boolean} isLocked
        */

    }]);

    return LoyaltyMerchantcardsValidateMerchantCard;
}();

exports.default = LoyaltyMerchantcardsValidateMerchantCard;