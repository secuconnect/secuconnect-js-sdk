'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyCustomersContactDTO model module.
 * @module model/LoyaltyCustomersContactDTO
 */
var LoyaltyCustomersContactDTO = function () {
    /**
     * Constructs a new <code>LoyaltyCustomersContactDTO</code>.
     * @alias module:model/LoyaltyCustomersContactDTO
     * @class
     */

    function LoyaltyCustomersContactDTO() {
        _classCallCheck(this, LoyaltyCustomersContactDTO);

        this.forename = undefined;
        this.surname = undefined;
        this.name = undefined;
        this.phone = undefined;
        this.address = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCustomersContactDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersContactDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersContactDTO} The populated <code>LoyaltyCustomersContactDTO</code> instance.
    */


    _createClass(LoyaltyCustomersContactDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCustomersContactDTO();

                if (data.hasOwnProperty('forename')) {
                    obj['forename'] = _ApiClient2.default.convertToType(data['forename'], 'String');
                }
                if (data.hasOwnProperty('surname')) {
                    obj['surname'] = _ApiClient2.default.convertToType(data['surname'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _Address2.default.constructFromObject(data['address']);
                }
            }
            return obj;
        }

        /**
         * Forename
         * @member {String} forename
         */


        /**
         * Surname
         * @member {String} surname
         */


        /**
         * Name
         * @member {String} name
         */


        /**
         * Phone
         * @member {String} phone
         */


        /**
         * Address
         * @member {module:model/Address} address
         */

    }]);

    return LoyaltyCustomersContactDTO;
}();

exports.default = LoyaltyCustomersContactDTO;