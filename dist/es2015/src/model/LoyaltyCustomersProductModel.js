'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _LoyaltyCustomersPaymentContainerModel = require('./LoyaltyCustomersPaymentContainerModel');

var _LoyaltyCustomersPaymentContainerModel2 = _interopRequireDefault(_LoyaltyCustomersPaymentContainerModel);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The LoyaltyCustomersProductModel model module.
 * @module model/LoyaltyCustomersProductModel
 */
var LoyaltyCustomersProductModel = function () {
    /**
     * Constructs a new <code>LoyaltyCustomersProductModel</code>.
     * @alias module:model/LoyaltyCustomersProductModel
     * @class
     */

    function LoyaltyCustomersProductModel() {
        _classCallCheck(this, LoyaltyCustomersProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.contact = undefined;
        this.merchant_contact = undefined;
        this.account_contact = undefined;
        this.payment_container = undefined;
        this.customernumber = undefined;
        this.note = undefined;
        this.created = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCustomersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersProductModel} The populated <code>LoyaltyCustomersProductModel</code> instance.
    */


    _createClass(LoyaltyCustomersProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCustomersProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('contact')) {
                    obj['contact'] = _Contact2.default.constructFromObject(data['contact']);
                }
                if (data.hasOwnProperty('merchant_contact')) {
                    obj['merchant_contact'] = _Contact2.default.constructFromObject(data['merchant_contact']);
                }
                if (data.hasOwnProperty('account_contact')) {
                    obj['account_contact'] = _Contact2.default.constructFromObject(data['account_contact']);
                }
                if (data.hasOwnProperty('payment_container')) {
                    obj['payment_container'] = _ApiClient2.default.convertToType(data['payment_container'], [_LoyaltyCustomersPaymentContainerModel2.default]);
                }
                if (data.hasOwnProperty('customernumber')) {
                    obj['customernumber'] = _ApiClient2.default.convertToType(data['customernumber'], 'String');
                }
                if (data.hasOwnProperty('note')) {
                    obj['note'] = _ApiClient2.default.convertToType(data['note'], 'String');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
            }
            return obj;
        }

        /**
         * Object of loyalty customer
         * @member {String} object
         */


        /**
         * Id of loyalty customer
         * @member {String} id
         */


        /**
         * merchant
         * @member {module:model/ProductInstanceUID} merchant
         */


        /**
         * Contact
         * @member {module:model/Contact} contact
         */


        /**
         * merchant contact
         * @member {module:model/Contact} merchant_contact
         */


        /**
         * merchant contact
         * @member {module:model/Contact} account_contact
         */


        /**
         * payment container
         * @member {Array.<module:model/LoyaltyCustomersPaymentContainerModel>} payment_container
         */


        /**
         * Customer number
         * @member {String} customernumber
         */


        /**
         * Customer number
         * @member {String} note
         */


        /**
         * Creation date
         * @member {String} created
         */

    }]);

    return LoyaltyCustomersProductModel;
}();

exports.default = LoyaltyCustomersProductModel;