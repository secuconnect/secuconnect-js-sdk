'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeneralMerchantsCheckoutOptionsCollectionSmartDevices = require('./GeneralMerchantsCheckoutOptionsCollectionSmartDevices');

var _GeneralMerchantsCheckoutOptionsCollectionSmartDevices2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptionsCollectionSmartDevices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GeneralMerchantsCheckoutOptionsCollection model module.
* @module model/GeneralMerchantsCheckoutOptionsCollection
*/
var GeneralMerchantsCheckoutOptionsCollection = function () {
    /**
    * Constructs a new <code>GeneralMerchantsCheckoutOptionsCollection</code>.
    * @alias module:model/GeneralMerchantsCheckoutOptionsCollection
    * @class
    */

    function GeneralMerchantsCheckoutOptionsCollection() {
        _classCallCheck(this, GeneralMerchantsCheckoutOptionsCollection);

        this.enabled = undefined;
        this.smart_devices = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptionsCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptionsCollection} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptionsCollection} The populated <code>GeneralMerchantsCheckoutOptionsCollection</code> instance.
    */


    _createClass(GeneralMerchantsCheckoutOptionsCollection, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsCheckoutOptionsCollection();

                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
                if (data.hasOwnProperty('smart_devices')) {
                    obj['smart_devices'] = _GeneralMerchantsCheckoutOptionsCollectionSmartDevices2.default.constructFromObject(data['smart_devices']);
                }
            }
            return obj;
        }

        /**
        * Enabled
        * @member {Boolean} enabled
        */

        /**
        * Smart devices
        * @member {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} smart_devices
        */

    }]);

    return GeneralMerchantsCheckoutOptionsCollection;
}();

exports.default = GeneralMerchantsCheckoutOptionsCollection;