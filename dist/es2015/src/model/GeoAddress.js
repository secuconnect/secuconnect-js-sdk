'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AddressComponents = require('./AddressComponents');

var _AddressComponents2 = _interopRequireDefault(_AddressComponents);

var _GeoAddressGeometry = require('./GeoAddressGeometry');

var _GeoAddressGeometry2 = _interopRequireDefault(_GeoAddressGeometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GeoAddress model module.
* @module model/GeoAddress
*/
var GeoAddress = function () {
    /**
    * Constructs a new <code>GeoAddress</code>.
    * @alias module:model/GeoAddress
    * @class
    */

    function GeoAddress() {
        _classCallCheck(this, GeoAddress);

        this.type = undefined;
        this.address_components = undefined;
        this.address_formatted = undefined;
        this.geometry = undefined;
    }

    /**
    * Constructs a <code>GeoAddress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeoAddress} obj Optional instance to populate.
    * @return {module:model/GeoAddress} The populated <code>GeoAddress</code> instance.
    */


    _createClass(GeoAddress, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeoAddress();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('address_components')) {
                    obj['address_components'] = _AddressComponents2.default.constructFromObject(data['address_components']);
                }
                if (data.hasOwnProperty('address_formatted')) {
                    obj['address_formatted'] = _ApiClient2.default.convertToType(data['address_formatted'], 'String');
                }
                if (data.hasOwnProperty('geometry')) {
                    obj['geometry'] = _GeoAddressGeometry2.default.constructFromObject(data['geometry']);
                }
            }
            return obj;
        }

        /**
        * Address type
        * @member {String} type
        */

        /**
        * Address components
        * @member {module:model/AddressComponents} address_components
        */

        /**
        * Address formatted
        * @member {String} address_formatted
        */

        /**
        * @member {module:model/GeoAddressGeometry} geometry
        */

    }]);

    return GeoAddress;
}();

exports.default = GeoAddress;