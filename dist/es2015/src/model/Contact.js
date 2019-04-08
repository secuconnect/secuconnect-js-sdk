'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Contact model module.
 * @module model/Contact
 */
var Contact = function () {
    /**
     * Constructs a new <code>Contact</code>.
     * @alias module:model/Contact
     * @class
     */

    function Contact() {
        _classCallCheck(this, Contact);

        this.forename = undefined;
        this.surname = undefined;
        this.companyname = undefined;
        this.salutation = undefined;
        this.gender = undefined;
        this.title = undefined;
        this.email = undefined;
        this.phone = undefined;
        this.mobile = undefined;
        this.fax = undefined;
        this.dob = undefined;
        this.picture = undefined;
        this.url_website = undefined;
        this.birthplace = undefined;
        this.nationality = undefined;
        this.address = undefined;
    }

    /**
    * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Contact} obj Optional instance to populate.
    * @return {module:model/Contact} The populated <code>Contact</code> instance.
    */


    _createClass(Contact, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Contact();

                if (data.hasOwnProperty('forename')) {
                    obj['forename'] = _ApiClient2.default.convertToType(data['forename'], 'String');
                }
                if (data.hasOwnProperty('surname')) {
                    obj['surname'] = _ApiClient2.default.convertToType(data['surname'], 'String');
                }
                if (data.hasOwnProperty('companyname')) {
                    obj['companyname'] = _ApiClient2.default.convertToType(data['companyname'], 'String');
                }
                if (data.hasOwnProperty('salutation')) {
                    obj['salutation'] = _ApiClient2.default.convertToType(data['salutation'], 'String');
                }
                if (data.hasOwnProperty('gender')) {
                    obj['gender'] = _ApiClient2.default.convertToType(data['gender'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('mobile')) {
                    obj['mobile'] = _ApiClient2.default.convertToType(data['mobile'], 'String');
                }
                if (data.hasOwnProperty('fax')) {
                    obj['fax'] = _ApiClient2.default.convertToType(data['fax'], 'String');
                }
                if (data.hasOwnProperty('dob')) {
                    obj['dob'] = _ApiClient2.default.convertToType(data['dob'], 'String');
                }
                if (data.hasOwnProperty('picture')) {
                    obj['picture'] = _ApiClient2.default.convertToType(data['picture'], 'String');
                }
                if (data.hasOwnProperty('url_website')) {
                    obj['url_website'] = _ApiClient2.default.convertToType(data['url_website'], 'String');
                }
                if (data.hasOwnProperty('birthplace')) {
                    obj['birthplace'] = _ApiClient2.default.convertToType(data['birthplace'], 'String');
                }
                if (data.hasOwnProperty('nationality')) {
                    obj['nationality'] = _ApiClient2.default.convertToType(data['nationality'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _Address2.default.constructFromObject(data['address']);
                }
            }
            return obj;
        }

        /**
         * Forename
         * @member {String} forename
         */


        /**
         * Surname
         * @member {String} surname
         */


        /**
         * Company name
         * @member {String} companyname
         */


        /**
         * Salutation
         * @member {String} salutation
         */


        /**
         * Gender
         * @member {String} gender
         */


        /**
         * Title
         * @member {String} title
         */


        /**
         * Email
         * @member {String} email
         */


        /**
         * Phone
         * @member {String} phone
         */


        /**
         * Mobile
         * @member {String} mobile
         */


        /**
         * Fax
         * @member {String} fax
         */


        /**
         * Date of birth
         * @member {String} dob
         */


        /**
         * The document id of an user picture (To upload the picture use our document service.)
         * @member {String} picture
         */


        /**
         * URL to website
         * @member {String} url_website
         */


        /**
         * Birthplace
         * @member {String} birthplace
         */


        /**
         * Nationality
         * @member {String} nationality
         */


        /**
         * Address
         * @member {module:model/Address} address
         */

    }]);

    return Contact;
}();

exports.default = Contact;