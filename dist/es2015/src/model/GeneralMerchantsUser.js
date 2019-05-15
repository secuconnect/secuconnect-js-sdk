'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GeoAddress = require('./GeoAddress');

var _GeoAddress2 = _interopRequireDefault(_GeoAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralMerchantsUser model module.
 * @module model/GeneralMerchantsUser
 */
var GeneralMerchantsUser = function () {
    /**
     * Constructs a new <code>GeneralMerchantsUser</code>.
     * @alias module:model/GeneralMerchantsUser
     * @class
     */

    function GeneralMerchantsUser() {
        _classCallCheck(this, GeneralMerchantsUser);

        this.object = undefined;
        this.id = undefined;
        this.name = undefined;
        this.companyname = undefined;
        this.address = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsUser} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsUser} The populated <code>GeneralMerchantsUser</code> instance.
    */


    _createClass(GeneralMerchantsUser, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsUser();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('companyname')) {
                    obj['companyname'] = _ApiClient2.default.convertToType(data['companyname'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], [_GeoAddress2.default]);
                }
            }
            return obj;
        }

        /**
         * Object of general merchant user
         * @member {String} object
         */


        /**
         * Id of general merchant user
         * @member {String} id
         */


        /**
         * Name of general merchant user
         * @member {String} name
         */


        /**
         * Company name of general merchant user
         * @member {String} companyname
         */


        /**
         * Address of general merchant user
         * @member {Array.<module:model/GeoAddress>} address
         */

    }]);

    return GeneralMerchantsUser;
}();

exports.default = GeneralMerchantsUser;