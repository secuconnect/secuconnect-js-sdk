'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AssignedBy = require('./AssignedBy');

var _AssignedBy2 = _interopRequireDefault(_AssignedBy);

var _GeneralMerchantsCheckoutOptions = require('./GeneralMerchantsCheckoutOptions');

var _GeneralMerchantsCheckoutOptions2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptions);

var _GeneralMerchantsLegalDetails = require('./GeneralMerchantsLegalDetails');

var _GeneralMerchantsLegalDetails2 = _interopRequireDefault(_GeneralMerchantsLegalDetails);

var _GeneralMerchantsUrls = require('./GeneralMerchantsUrls');

var _GeneralMerchantsUrls2 = _interopRequireDefault(_GeneralMerchantsUrls);

var _GeneralMerchantsUser = require('./GeneralMerchantsUser');

var _GeneralMerchantsUser2 = _interopRequireDefault(_GeneralMerchantsUser);

var _InvitedBy = require('./InvitedBy');

var _InvitedBy2 = _interopRequireDefault(_InvitedBy);

var _ParentModel = require('./ParentModel');

var _ParentModel2 = _interopRequireDefault(_ParentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralMerchantsProductModel model module.
 * @module model/GeneralMerchantsProductModel
 */
var GeneralMerchantsProductModel = function () {
    /**
     * Constructs a new <code>GeneralMerchantsProductModel</code>.
     * @alias module:model/GeneralMerchantsProductModel
     * @class
     */

    function GeneralMerchantsProductModel() {
        _classCallCheck(this, GeneralMerchantsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.id_old = undefined;
        this.type = undefined;
        this.user = undefined;
        this.parent = undefined;
        this.assigned_by = undefined;
        this.invited_by = undefined;
        this.legal_details = undefined;
        this.checkout_options = undefined;
        this.urls = undefined;
        this.store_name = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsProductModel} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsProductModel} The populated <code>GeneralMerchantsProductModel</code> instance.
    */


    _createClass(GeneralMerchantsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('id_old')) {
                    obj['id_old'] = _ApiClient2.default.convertToType(data['id_old'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('user')) {
                    obj['user'] = _GeneralMerchantsUser2.default.constructFromObject(data['user']);
                }
                if (data.hasOwnProperty('parent')) {
                    obj['parent'] = _ParentModel2.default.constructFromObject(data['parent']);
                }
                if (data.hasOwnProperty('assigned_by')) {
                    obj['assigned_by'] = _ApiClient2.default.convertToType(data['assigned_by'], [_AssignedBy2.default]);
                }
                if (data.hasOwnProperty('invited_by')) {
                    obj['invited_by'] = _ApiClient2.default.convertToType(data['invited_by'], [_InvitedBy2.default]);
                }
                if (data.hasOwnProperty('legal_details')) {
                    obj['legal_details'] = _GeneralMerchantsLegalDetails2.default.constructFromObject(data['legal_details']);
                }
                if (data.hasOwnProperty('checkout_options')) {
                    obj['checkout_options'] = _GeneralMerchantsCheckoutOptions2.default.constructFromObject(data['checkout_options']);
                }
                if (data.hasOwnProperty('urls')) {
                    obj['urls'] = _GeneralMerchantsUrls2.default.constructFromObject(data['urls']);
                }
                if (data.hasOwnProperty('store_name')) {
                    obj['store_name'] = _ApiClient2.default.convertToType(data['store_name'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of general merchant
         * @member {String} object
         */


        /**
         * Id of general merchant
         * @member {String} id
         */


        /**
         * Old id of general merchant
         * @member {String} id_old
         */


        /**
         * Type of general merchant
         * @member {String} type
         */


        /**
         * General merchant user
         * @member {module:model/GeneralMerchantsUser} user
         */


        /**
         * Parent of general merchant user
         * @member {module:model/ParentModel} parent
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
         * Legal details
         * @member {module:model/GeneralMerchantsLegalDetails} legal_details
         */


        /**
         * Checkout options
         * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
         */


        /**
         * Urls
         * @member {module:model/GeneralMerchantsUrls} urls
         */


        /**
         * store name
         * @member {String} store_name
         */

    }]);

    return GeneralMerchantsProductModel;
}();

exports.default = GeneralMerchantsProductModel;