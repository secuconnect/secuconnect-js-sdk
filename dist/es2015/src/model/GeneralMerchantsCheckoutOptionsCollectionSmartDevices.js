'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GeneralMerchantsCheckoutOptionsCollectionSmartDevices model module.
* @module model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices
*/
var GeneralMerchantsCheckoutOptionsCollectionSmartDevices = function () {
    /**
    * Constructs a new <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code>.
    * @alias module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices
    * @class
    */

    function GeneralMerchantsCheckoutOptionsCollectionSmartDevices() {
        _classCallCheck(this, GeneralMerchantsCheckoutOptionsCollectionSmartDevices);

        this.object = undefined;
        this.id = undefined;
        this.description = undefined;
        this.store = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} The populated <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code> instance.
    */


    _createClass(GeneralMerchantsCheckoutOptionsCollectionSmartDevices, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsCheckoutOptionsCollectionSmartDevices();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _Store2.default.constructFromObject(data['store']);
                }
            }
            return obj;
        }

        /**
        * Object of smart device
        * @member {String} object
        */

        /**
        * Id of smart device
        * @member {String} id
        */

        /**
        * Description of smart device
        * @member {String} description
        */

        /**
        * Store
        * @member {module:model/Store} store
        */

    }]);

    return GeneralMerchantsCheckoutOptionsCollectionSmartDevices;
}();

exports.default = GeneralMerchantsCheckoutOptionsCollectionSmartDevices;