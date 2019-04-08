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
 * The LoyaltyStoregroupsDTO model module.
 * @module model/LoyaltyStoregroupsDTO
 */
var LoyaltyStoregroupsDTO = function () {
    /**
     * Constructs a new <code>LoyaltyStoregroupsDTO</code>.
     * @alias module:model/LoyaltyStoregroupsDTO
     * @class
     */

    function LoyaltyStoregroupsDTO() {
        _classCallCheck(this, LoyaltyStoregroupsDTO);

        this.name = undefined;
        this.merchant = undefined;
        this.stores = undefined;
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsDTO} The populated <code>LoyaltyStoregroupsDTO</code> instance.
    */


    _createClass(LoyaltyStoregroupsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyStoregroupsDTO();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ApiClient2.default.convertToType(data['merchant'], 'String');
                }
                if (data.hasOwnProperty('stores')) {
                    obj['stores'] = _ApiClient2.default.convertToType(data['stores'], ['String']);
                }
            }
            return obj;
        }

        /**
         * Loyalty store group name
         * @member {String} name
         */


        /**
         * Loyalty store group merchant id
         * @member {String} merchant
         */


        /**
         * List of loyalty stores ids
         * @member {Array.<String>} stores
         */

    }]);

    return LoyaltyStoregroupsDTO;
}();

exports.default = LoyaltyStoregroupsDTO;