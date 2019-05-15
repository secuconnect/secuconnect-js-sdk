'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardgroupsDTOMerchant = require('./LoyaltyCardgroupsDTOMerchant');

var _LoyaltyCardgroupsDTOMerchant2 = _interopRequireDefault(_LoyaltyCardgroupsDTOMerchant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyCardgroupsDTO model module.
 * @module model/LoyaltyCardgroupsDTO
 */
var LoyaltyCardgroupsDTO = function () {
    /**
     * Constructs a new <code>LoyaltyCardgroupsDTO</code>.
     * @alias module:model/LoyaltyCardgroupsDTO
     * @class
     */

    function LoyaltyCardgroupsDTO() {
        _classCallCheck(this, LoyaltyCardgroupsDTO);

        this.display_name = undefined;
        this.display_name_raw = undefined;
        this.stock_warn_limit = undefined;
        this.picture = undefined;
        this.merchant = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsDTO} The populated <code>LoyaltyCardgroupsDTO</code> instance.
    */


    _createClass(LoyaltyCardgroupsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCardgroupsDTO();

                if (data.hasOwnProperty('display_name')) {
                    obj['display_name'] = _ApiClient2.default.convertToType(data['display_name'], 'String');
                }
                if (data.hasOwnProperty('display_name_raw')) {
                    obj['display_name_raw'] = _ApiClient2.default.convertToType(data['display_name_raw'], 'String');
                }
                if (data.hasOwnProperty('stock_warn_limit')) {
                    obj['stock_warn_limit'] = _ApiClient2.default.convertToType(data['stock_warn_limit'], 'String');
                }
                if (data.hasOwnProperty('picture')) {
                    obj['picture'] = _ApiClient2.default.convertToType(data['picture'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _LoyaltyCardgroupsDTOMerchant2.default.constructFromObject(data['merchant']);
                }
            }
            return obj;
        }

        /**
         * Display name
         * @member {String} display_name
         */


        /**
         * Display name raw
         * @member {String} display_name_raw
         */


        /**
         * Stock warn limit
         * @member {String} stock_warn_limit
         */


        /**
         * Picture
         * @member {String} picture
         */


        /**
         * LoyaltyCardgroupsDTO
         * @member {module:model/LoyaltyCardgroupsDTOMerchant} merchant
         */

    }]);

    return LoyaltyCardgroupsDTO;
}();

exports.default = LoyaltyCardgroupsDTO;