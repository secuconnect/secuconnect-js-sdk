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
* The LoyaltyMerchantcardsDTOLock model module.
* @module model/LoyaltyMerchantcardsDTOLock
*/
var LoyaltyMerchantcardsDTOLock = function () {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOLock</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOLock
    * @class
    */

    function LoyaltyMerchantcardsDTOLock() {
        _classCallCheck(this, LoyaltyMerchantcardsDTOLock);

        this.lock_status = undefined;
        this.reason = undefined;
        this.note = undefined;
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOLock</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOLock} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOLock} The populated <code>LoyaltyMerchantcardsDTOLock</code> instance.
    */


    _createClass(LoyaltyMerchantcardsDTOLock, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyMerchantcardsDTOLock();

                if (data.hasOwnProperty('lock_status')) {
                    obj['lock_status'] = _ApiClient2.default.convertToType(data['lock_status'], 'String');
                }
                if (data.hasOwnProperty('reason')) {
                    obj['reason'] = _ApiClient2.default.convertToType(data['reason'], 'String');
                }
                if (data.hasOwnProperty('note')) {
                    obj['note'] = _ApiClient2.default.convertToType(data['note'], 'String');
                }
            }
            return obj;
        }

        /**
        * Lock status
        * @member {String} lock_status
        */

        /**
        * Lock reason
        * @member {String} reason
        */

        /**
        * Lock note
        * @member {String} note
        */

    }]);

    return LoyaltyMerchantcardsDTOLock;
}();

exports.default = LoyaltyMerchantcardsDTOLock;