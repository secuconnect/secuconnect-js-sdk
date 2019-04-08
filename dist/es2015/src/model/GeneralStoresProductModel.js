'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AddressComponents = require('./AddressComponents');

var _AddressComponents2 = _interopRequireDefault(_AddressComponents);

var _AssignedBy = require('./AssignedBy');

var _AssignedBy2 = _interopRequireDefault(_AssignedBy);

var _InvitedBy = require('./InvitedBy');

var _InvitedBy2 = _interopRequireDefault(_InvitedBy);

var _OpenHours = require('./OpenHours');

var _OpenHours2 = _interopRequireDefault(_OpenHours);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralStoresProductModel model module.
 * @module model/GeneralStoresProductModel
 */
var GeneralStoresProductModel = function () {
    /**
     * Constructs a new <code>GeneralStoresProductModel</code>.
     * @alias module:model/GeneralStoresProductModel
     * @class
     */

    function GeneralStoresProductModel() {
        _classCallCheck(this, GeneralStoresProductModel);

        this.object = undefined;
        this.id = undefined;
        this.id_old = undefined;
        this.merchant = undefined;
        this.facebook_id = undefined;
        this.source = undefined;
        this.key = undefined;
        this.hash = undefined;
        this.address_components = undefined;
        this.address_formatted = undefined;
        this.phone_number_formatted = undefined;
        this.geometry = undefined;
        this.name = undefined;
        this.name_raw = undefined;
        this.photo_main = undefined;
        this.photo = undefined;
        this.category_main = undefined;
        this.category = undefined;
        this.url_googleplus = undefined;
        this.url_website = undefined;
        this.open_hours = undefined;
        this.open_now = undefined;
        this.open_time = undefined;
        this.utc_offset = undefined;
        this.assigned_by = undefined;
        this.invited_by = undefined;
        this.has_beacon = undefined;
    }

    /**
    * Constructs a <code>GeneralStoresProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresProductModel} obj Optional instance to populate.
    * @return {module:model/GeneralStoresProductModel} The populated <code>GeneralStoresProductModel</code> instance.
    */


    _createClass(GeneralStoresProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralStoresProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('id_old')) {
                    obj['id_old'] = _ApiClient2.default.convertToType(data['id_old'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('facebook_id')) {
                    obj['facebook_id'] = _ApiClient2.default.convertToType(data['facebook_id'], 'String');
                }
                if (data.hasOwnProperty('source')) {
                    obj['source'] = _ApiClient2.default.convertToType(data['source'], 'String');
                }
                if (data.hasOwnProperty('key')) {
                    obj['key'] = _ApiClient2.default.convertToType(data['key'], 'String');
                }
                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('address_components')) {
                    obj['address_components'] = _ApiClient2.default.convertToType(data['address_components'], [_AddressComponents2.default]);
                }
                if (data.hasOwnProperty('address_formatted')) {
                    obj['address_formatted'] = _ApiClient2.default.convertToType(data['address_formatted'], 'String');
                }
                if (data.hasOwnProperty('phone_number_formatted')) {
                    obj['phone_number_formatted'] = _ApiClient2.default.convertToType(data['phone_number_formatted'], 'String');
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
                if (data.hasOwnProperty('photo_main')) {
                    obj['photo_main'] = _ApiClient2.default.convertToType(data['photo_main'], 'String');
                }
                if (data.hasOwnProperty('photo')) {
                    obj['photo'] = _ApiClient2.default.convertToType(data['photo'], ['String']);
                }
                if (data.hasOwnProperty('category_main')) {
                    obj['category_main'] = _ApiClient2.default.convertToType(data['category_main'], 'String');
                }
                if (data.hasOwnProperty('category')) {
                    obj['category'] = _ApiClient2.default.convertToType(data['category'], 'String');
                }
                if (data.hasOwnProperty('url_googleplus')) {
                    obj['url_googleplus'] = _ApiClient2.default.convertToType(data['url_googleplus'], 'String');
                }
                if (data.hasOwnProperty('url_website')) {
                    obj['url_website'] = _ApiClient2.default.convertToType(data['url_website'], 'String');
                }
                if (data.hasOwnProperty('open_hours')) {
                    obj['open_hours'] = _ApiClient2.default.convertToType(data['open_hours'], [_OpenHours2.default]);
                }
                if (data.hasOwnProperty('open_now')) {
                    obj['open_now'] = _ApiClient2.default.convertToType(data['open_now'], 'Boolean');
                }
                if (data.hasOwnProperty('open_time')) {
                    obj['open_time'] = _ApiClient2.default.convertToType(data['open_time'], 'String');
                }
                if (data.hasOwnProperty('utc_offset')) {
                    obj['utc_offset'] = _ApiClient2.default.convertToType(data['utc_offset'], 'String');
                }
                if (data.hasOwnProperty('assigned_by')) {
                    obj['assigned_by'] = _ApiClient2.default.convertToType(data['assigned_by'], [_AssignedBy2.default]);
                }
                if (data.hasOwnProperty('invited_by')) {
                    obj['invited_by'] = _ApiClient2.default.convertToType(data['invited_by'], [_InvitedBy2.default]);
                }
                if (data.hasOwnProperty('has_beacon')) {
                    obj['has_beacon'] = _ApiClient2.default.convertToType(data['has_beacon'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Object of general store
         * @member {String} object
         */


        /**
         * Id of general store
         * @member {String} id
         */


        /**
         * Old id of general store
         * @member {String} id_old
         */


        /**
         * General merchant of general store
         * @member {module:model/ProductInstanceUID} merchant
         */


        /**
         * Facebook id
         * @member {String} facebook_id
         */


        /**
         * Source
         * @member {String} source
         */


        /**
         * Key
         * @member {String} key
         */


        /**
         * Hash
         * @member {String} hash
         */


        /**
         * Address components
         * @member {Array.<module:model/AddressComponents>} address_components
         */


        /**
         * General store formatted address
         * @member {String} address_formatted
         */


        /**
         * General store formatted phone number
         * @member {String} phone_number_formatted
         */


        /**
         * General store geometry
         * @member {String} geometry
         */


        /**
         * General store name
         * @member {String} name
         */


        /**
         * General store raw name
         * @member {String} name_raw
         */


        /**
         * General store main photo
         * @member {String} photo_main
         */


        /**
         * General store photos
         * @member {Array.<String>} photo
         */


        /**
         * General store main category
         * @member {String} category_main
         */


        /**
         * General store category
         * @member {String} category
         */


        /**
         * Url to general store google plus
         * @member {String} url_googleplus
         */


        /**
         * Url to general store website
         * @member {String} url_website
         */


        /**
         * Open hours in every day
         * @member {Array.<module:model/OpenHours>} open_hours
         */


        /**
         * Open now
         * @member {Boolean} open_now
         */


        /**
         * Open time
         * @member {String} open_time
         */


        /**
         * Utc offset
         * @member {String} utc_offset
         */


        /**
         * Assigned by
         * @member {Array.<module:model/AssignedBy>} assigned_by
         */


        /**
         * Invited by
         * @member {Array.<module:model/InvitedBy>} invited_by
         */


        /**
         * Has beacon
         * @member {Boolean} has_beacon
         */

    }]);

    return GeneralStoresProductModel;
}();

exports.default = GeneralStoresProductModel;