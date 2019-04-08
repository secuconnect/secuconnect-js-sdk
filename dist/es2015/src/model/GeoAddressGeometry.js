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
 * The GeoAddressGeometry model module.
 * @module model/GeoAddressGeometry
 */
var GeoAddressGeometry = function () {
    /**
     * Constructs a new <code>GeoAddressGeometry</code>.
     * Geometry
     * @alias module:model/GeoAddressGeometry
     * @class
     */

    function GeoAddressGeometry() {
        _classCallCheck(this, GeoAddressGeometry);

        this.lat = undefined;
        this.lon = undefined;
    }

    /**
    * Constructs a <code>GeoAddressGeometry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeoAddressGeometry} obj Optional instance to populate.
    * @return {module:model/GeoAddressGeometry} The populated <code>GeoAddressGeometry</code> instance.
    */


    _createClass(GeoAddressGeometry, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeoAddressGeometry();

                if (data.hasOwnProperty('lat')) {
                    obj['lat'] = _ApiClient2.default.convertToType(data['lat'], 'String');
                }
                if (data.hasOwnProperty('lon')) {
                    obj['lon'] = _ApiClient2.default.convertToType(data['lon'], 'String');
                }
            }
            return obj;
        }

        /**
         * latitude
         * @member {String} lat
         */


        /**
         * longitude
         * @member {String} lon
         */

    }]);

    return GeoAddressGeometry;
}();

exports.default = GeoAddressGeometry;