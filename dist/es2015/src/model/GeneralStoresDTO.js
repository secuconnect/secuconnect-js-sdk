'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

var _OpenHours = require('./OpenHours');

var _OpenHours2 = _interopRequireDefault(_OpenHours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GeneralStoresDTO model module.
* @module model/GeneralStoresDTO
*/
var GeneralStoresDTO = function () {
    /**
    * Constructs a new <code>GeneralStoresDTO</code>.
    * @alias module:model/GeneralStoresDTO
    * @class
    */

    function GeneralStoresDTO() {
        _classCallCheck(this, GeneralStoresDTO);

        this.address = undefined;
        this.facebook_id = undefined;
        this.phone = undefined;
        this.url_website = undefined;
        this.photo_main = undefined;
        this.photo = undefined;
        this.open_hours = undefined;
    }

    /**
    * Constructs a <code>GeneralStoresDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresDTO} obj Optional instance to populate.
    * @return {module:model/GeneralStoresDTO} The populated <code>GeneralStoresDTO</code> instance.
    */


    _createClass(GeneralStoresDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralStoresDTO();

                if (data.hasOwnProperty('address')) {
                    obj['address'] = _Address2.default.constructFromObject(data['address']);
                }
                if (data.hasOwnProperty('facebook_id')) {
                    obj['facebook_id'] = _ApiClient2.default.convertToType(data['facebook_id'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('url_website')) {
                    obj['url_website'] = _ApiClient2.default.convertToType(data['url_website'], 'String');
                }
                if (data.hasOwnProperty('photo_main')) {
                    obj['photo_main'] = _ApiClient2.default.convertToType(data['photo_main'], 'String');
                }
                if (data.hasOwnProperty('photo')) {
                    obj['photo'] = _ApiClient2.default.convertToType(data['photo'], ['String']);
                }
                if (data.hasOwnProperty('open_hours')) {
                    obj['open_hours'] = _ApiClient2.default.convertToType(data['open_hours'], [_OpenHours2.default]);
                }
            }
            return obj;
        }

        /**
        * New address
        * @member {module:model/Address} address
        */

        /**
        * New facebook id
        * @member {String} facebook_id
        */

        /**
        * New phone number
        * @member {String} phone
        */

        /**
        * New url to general store website
        * @member {String} url_website
        */

        /**
        * New main photo
        * @member {String} photo_main
        */

        /**
        * New photos
        * @member {Array.<String>} photo
        */

        /**
        * Open hours in every day
        * @member {Array.<module:model/OpenHours>} open_hours
        */

    }]);

    return GeneralStoresDTO;
}();

exports.default = GeneralStoresDTO;