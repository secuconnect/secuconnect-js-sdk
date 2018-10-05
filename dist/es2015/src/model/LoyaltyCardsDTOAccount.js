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
* The LoyaltyCardsDTOAccount model module.
* @module model/LoyaltyCardsDTOAccount
*/
var LoyaltyCardsDTOAccount = function () {
    /**
    * Constructs a new <code>LoyaltyCardsDTOAccount</code>.
    * @alias module:model/LoyaltyCardsDTOAccount
    * @class
    */

    function LoyaltyCardsDTOAccount() {
        _classCallCheck(this, LoyaltyCardsDTOAccount);

        this.object = undefined;
        this.id = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCardsDTOAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardsDTOAccount} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardsDTOAccount} The populated <code>LoyaltyCardsDTOAccount</code> instance.
    */


    _createClass(LoyaltyCardsDTOAccount, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCardsDTOAccount();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
            }
            return obj;
        }

        /**
        * LoyaltyCardsDTOAccount
        * @member {String} object
        */

        /**
        * LoyaltyCardsDTOAccount
        * @member {String} id
        */

    }]);

    return LoyaltyCardsDTOAccount;
}();

exports.default = LoyaltyCardsDTOAccount;