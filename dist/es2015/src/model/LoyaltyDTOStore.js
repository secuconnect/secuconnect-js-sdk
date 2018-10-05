'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyStoregroupsDTOStoresAddressComponents = require('./LoyaltyStoregroupsDTOStoresAddressComponents');

var _LoyaltyStoregroupsDTOStoresAddressComponents2 = _interopRequireDefault(_LoyaltyStoregroupsDTOStoresAddressComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyDTOStore model module.
* @module model/LoyaltyDTOStore
*/
var LoyaltyDTOStore = function () {
    /**
    * Constructs a new <code>LoyaltyDTOStore</code>.
    * @alias module:model/LoyaltyDTOStore
    * @class
    */

    function LoyaltyDTOStore() {
        _classCallCheck(this, LoyaltyDTOStore);

        this.object = undefined;
        this.id = undefined;
        this.address_components = undefined;
        this.address_formatted = undefined;
        this.geometry = undefined;
        this.name = undefined;
        this.name_raw = undefined;
    }

    /**
    * Constructs a <code>LoyaltyDTOStore</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyDTOStore} obj Optional instance to populate.
    * @return {module:model/LoyaltyDTOStore} The populated <code>LoyaltyDTOStore</code> instance.
    */


    _createClass(LoyaltyDTOStore, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyDTOStore();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('address_components')) {
                    obj['address_components'] = _ApiClient2.default.convertToType(data['address_components'], [_LoyaltyStoregroupsDTOStoresAddressComponents2.default]);
                }
                if (data.hasOwnProperty('address_formatted')) {
                    obj['address_formatted'] = _ApiClient2.default.convertToType(data['address_formatted'], 'String');
                }
                if (data.hasOwnProperty('geometry')) {
                    obj['geometry'] = _ApiClient2.default.convertToType(data['geometry'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('name_raw')) {
                    obj['name_raw'] = _ApiClient2.default.convertToType(data['name_raw'], 'String');
                }
            }
            return obj;
        }

        /**
        * LoyaltyDTOStore
        * @member {String} object
        */

        /**
        * LoyaltyDTOStore
        * @member {String} id
        */

        /**
        * LoyaltyDTOStore
        * @member {Array.<module:model/LoyaltyStoregroupsDTOStoresAddressComponents>} address_components
        */

        /**
        * Address formatted
        * @member {String} address_formatted
        */

        /**
        * Geometry
        * @member {String} geometry
        */

        /**
        * Name
        * @member {String} name
        */

        /**
        * Raw name
        * @member {String} name_raw
        */

    }]);

    return LoyaltyDTOStore;
}();

exports.default = LoyaltyDTOStore;