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
* The LoyaltyDTOMerchant model module.
* @module model/LoyaltyDTOMerchant
*/
var LoyaltyDTOMerchant = function () {
    /**
    * Constructs a new <code>LoyaltyDTOMerchant</code>.
    * @alias module:model/LoyaltyDTOMerchant
    * @class
    */

    function LoyaltyDTOMerchant() {
        _classCallCheck(this, LoyaltyDTOMerchant);

        this.object = undefined;
        this.id = undefined;
    }

    /**
    * Constructs a <code>LoyaltyDTOMerchant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyDTOMerchant} obj Optional instance to populate.
    * @return {module:model/LoyaltyDTOMerchant} The populated <code>LoyaltyDTOMerchant</code> instance.
    */


    _createClass(LoyaltyDTOMerchant, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyDTOMerchant();

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
        * LoyaltyDTOMerchant
        * @member {String} object
        */

        /**
        * LoyaltyDTOMerchant
        * @member {String} id
        */

    }]);

    return LoyaltyDTOMerchant;
}();

exports.default = LoyaltyDTOMerchant;