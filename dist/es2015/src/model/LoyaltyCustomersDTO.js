'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyCustomersDTO model module.
 * @module model/LoyaltyCustomersDTO
 */
var LoyaltyCustomersDTO = function () {
    /**
     * Constructs a new <code>LoyaltyCustomersDTO</code>.
     * @alias module:model/LoyaltyCustomersDTO
     * @class
     */

    function LoyaltyCustomersDTO() {
        _classCallCheck(this, LoyaltyCustomersDTO);

        this.merchant = undefined;
        this.merchant_contact = undefined;
        this.age = undefined;
        this.days_until_birthday = undefined;
        this.customernumber = undefined;
        this.note = undefined;
        this.additional_data = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCustomersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersDTO} The populated <code>LoyaltyCustomersDTO</code> instance.
    */


    _createClass(LoyaltyCustomersDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCustomersDTO();

                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('merchant_contact')) {
                    obj['merchant_contact'] = _Contact2.default.constructFromObject(data['merchant_contact']);
                }
                if (data.hasOwnProperty('age')) {
                    obj['age'] = _ApiClient2.default.convertToType(data['age'], 'Number');
                }
                if (data.hasOwnProperty('days_until_birthday')) {
                    obj['days_until_birthday'] = _ApiClient2.default.convertToType(data['days_until_birthday'], 'Number');
                }
                if (data.hasOwnProperty('customernumber')) {
                    obj['customernumber'] = _ApiClient2.default.convertToType(data['customernumber'], 'String');
                }
                if (data.hasOwnProperty('note')) {
                    obj['note'] = _ApiClient2.default.convertToType(data['note'], 'String');
                }
                if (data.hasOwnProperty('additional_data')) {
                    obj['additional_data'] = _ApiClient2.default.convertToType(data['additional_data'], Object);
                }
            }
            return obj;
        }

        /**
         * merchant
         * @member {String} merchant
         */


        /**
         * Contact
         * @member {module:model/Contact} merchant_contact
         */


        /**
         * Age
         * @member {Number} age
         */


        /**
         * Number of days until birthday
         * @member {Number} days_until_birthday
         */


        /**
         * Customer number
         * @member {String} customernumber
         */


        /**
         * note
         * @member {String} note
         */


        /**
         * Consent for communication
         * @member {Object} additional_data
         */

    }]);

    return LoyaltyCustomersDTO;
}();

exports.default = LoyaltyCustomersDTO;