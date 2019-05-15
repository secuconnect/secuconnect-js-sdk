'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

var _GeneralMerchantsCheckoutOptions = require('./GeneralMerchantsCheckoutOptions');

var _GeneralMerchantsCheckoutOptions2 = _interopRequireDefault(_GeneralMerchantsCheckoutOptions);

var _GeneralMerchantsLegalDetails = require('./GeneralMerchantsLegalDetails');

var _GeneralMerchantsLegalDetails2 = _interopRequireDefault(_GeneralMerchantsLegalDetails);

var _GeneralMerchantsUrls = require('./GeneralMerchantsUrls');

var _GeneralMerchantsUrls2 = _interopRequireDefault(_GeneralMerchantsUrls);

var _PaymentInformation = require('./PaymentInformation');

var _PaymentInformation2 = _interopRequireDefault(_PaymentInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralMerchantsDTO model module.
 * @module model/GeneralMerchantsDTO
 */
var GeneralMerchantsDTO = function () {
    /**
     * Constructs a new <code>GeneralMerchantsDTO</code>.
     * @alias module:model/GeneralMerchantsDTO
     * @class
     */

    function GeneralMerchantsDTO() {
        _classCallCheck(this, GeneralMerchantsDTO);

        this.salutation = undefined;
        this.companyname = undefined;
        this.forename = undefined;
        this.surname = undefined;
        this.dob = undefined;
        this.homepage = undefined;
        this.email = undefined;
        this.phone = undefined;
        this.address = undefined;
        this.payment_data = undefined;
        this.legal_details = undefined;
        this.checkout_options = undefined;
        this.urls = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsDTO} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsDTO} The populated <code>GeneralMerchantsDTO</code> instance.
    */


    _createClass(GeneralMerchantsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsDTO();

                if (data.hasOwnProperty('salutation')) {
                    obj['salutation'] = _ApiClient2.default.convertToType(data['salutation'], 'String');
                }
                if (data.hasOwnProperty('companyname')) {
                    obj['companyname'] = _ApiClient2.default.convertToType(data['companyname'], 'String');
                }
                if (data.hasOwnProperty('forename')) {
                    obj['forename'] = _ApiClient2.default.convertToType(data['forename'], 'String');
                }
                if (data.hasOwnProperty('surname')) {
                    obj['surname'] = _ApiClient2.default.convertToType(data['surname'], 'String');
                }
                if (data.hasOwnProperty('dob')) {
                    obj['dob'] = _ApiClient2.default.convertToType(data['dob'], 'String');
                }
                if (data.hasOwnProperty('homepage')) {
                    obj['homepage'] = _ApiClient2.default.convertToType(data['homepage'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _Address2.default.constructFromObject(data['address']);
                }
                if (data.hasOwnProperty('payment_data')) {
                    obj['payment_data'] = _PaymentInformation2.default.constructFromObject(data['payment_data']);
                }
                if (data.hasOwnProperty('legal_details')) {
                    obj['legal_details'] = _ApiClient2.default.convertToType(data['legal_details'], [_GeneralMerchantsLegalDetails2.default]);
                }
                if (data.hasOwnProperty('checkout_options')) {
                    obj['checkout_options'] = _GeneralMerchantsCheckoutOptions2.default.constructFromObject(data['checkout_options']);
                }
                if (data.hasOwnProperty('urls')) {
                    obj['urls'] = _ApiClient2.default.convertToType(data['urls'], [_GeneralMerchantsUrls2.default]);
                }
            }
            return obj;
        }

        /**
         * Salutation
         * @member {String} salutation
         */


        /**
         * companyname
         * @member {String} companyname
         */


        /**
         * forename
         * @member {String} forename
         */


        /**
         * surname
         * @member {String} surname
         */


        /**
         * Date of birth
         * @member {String} dob
         */


        /**
         * Merchant homepage url or shop url
         * @member {String} homepage
         */


        /**
         * Merchant email address
         * @member {String} email
         */


        /**
         * Merchant phone number
         * @member {String} phone
         */


        /**
         * Address
         * @member {module:model/Address} address
         */


        /**
         * Merchants bank account for the payout
         * @member {module:model/PaymentInformation} payment_data
         */


        /**
         * Legal details
         * @member {Array.<module:model/GeneralMerchantsLegalDetails>} legal_details
         */


        /**
         * Checkout options
         * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
         */


        /**
         * Urls
         * @member {Array.<module:model/GeneralMerchantsUrls>} urls
         */

    }]);

    return GeneralMerchantsDTO;
}();

exports.default = GeneralMerchantsDTO;