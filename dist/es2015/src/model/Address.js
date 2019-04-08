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
 * The Address model module.
 * @module model/Address
 */
var Address = function () {
    /**
     * Constructs a new <code>Address</code>.
     * Address
     * @alias module:model/Address
     * @class
     */

    function Address() {
        _classCallCheck(this, Address);

        this.type = undefined;
        this.street = undefined;
        this.street_number = undefined;
        this.city = undefined;
        this.postal_code = undefined;
        this.country = undefined;
    }

    /**
    * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Address} obj Optional instance to populate.
    * @return {module:model/Address} The populated <code>Address</code> instance.
    */


    _createClass(Address, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Address();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('street')) {
                    obj['street'] = _ApiClient2.default.convertToType(data['street'], 'String');
                }
                if (data.hasOwnProperty('street_number')) {
                    obj['street_number'] = _ApiClient2.default.convertToType(data['street_number'], 'String');
                }
                if (data.hasOwnProperty('city')) {
                    obj['city'] = _ApiClient2.default.convertToType(data['city'], 'String');
                }
                if (data.hasOwnProperty('postal_code')) {
                    obj['postal_code'] = _ApiClient2.default.convertToType(data['postal_code'], 'String');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
            }
            return obj;
        }

        /**
         * Type
         * @member {String} type
         */


        /**
         * Street
         * @member {String} street
         */


        /**
         * Street number
         * @member {String} street_number
         */


        /**
         * City
         * @member {String} city
         */


        /**
         * Postal code
         * @member {String} postal_code
         */


        /**
         * Country
         * @member {String} country
         */

    }]);

    return Address;
}();

exports.default = Address;