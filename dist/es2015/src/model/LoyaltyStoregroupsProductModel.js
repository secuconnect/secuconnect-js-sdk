'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyDTOMerchant = require('./LoyaltyDTOMerchant');

var _LoyaltyDTOMerchant2 = _interopRequireDefault(_LoyaltyDTOMerchant);

var _LoyaltyDTOStore = require('./LoyaltyDTOStore');

var _LoyaltyDTOStore2 = _interopRequireDefault(_LoyaltyDTOStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyStoregroupsProductModel model module.
 * @module model/LoyaltyStoregroupsProductModel
 */
var LoyaltyStoregroupsProductModel = function () {
    /**
     * Constructs a new <code>LoyaltyStoregroupsProductModel</code>.
     * @alias module:model/LoyaltyStoregroupsProductModel
     * @class
     */

    function LoyaltyStoregroupsProductModel() {
        _classCallCheck(this, LoyaltyStoregroupsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.stores = undefined;
        this.created = undefined;
        this.updated = undefined;
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsProductModel} The populated <code>LoyaltyStoregroupsProductModel</code> instance.
    */


    _createClass(LoyaltyStoregroupsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyStoregroupsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _LoyaltyDTOMerchant2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('stores')) {
                    obj['stores'] = _ApiClient2.default.convertToType(data['stores'], [_LoyaltyDTOStore2.default]);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of loyalty store group
         * @member {String} object
         */


        /**
         * Id of loyalty store group
         * @member {String} id
         */


        /**
         * Merchant data for loyalty
         * @member {module:model/LoyaltyDTOMerchant} merchant
         */


        /**
         * LoyaltyStoregroupsProductModel
         * @member {Array.<module:model/LoyaltyDTOStore>} stores
         */


        /**
         * Creation date
         * @member {String} created
         */


        /**
         * Update date
         * @member {String} updated
         */

    }]);

    return LoyaltyStoregroupsProductModel;
}();

exports.default = LoyaltyStoregroupsProductModel;