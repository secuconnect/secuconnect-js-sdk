
import ApiClient from '../ApiClient';
import Address from './Address';





/**
* The Contact model module.
* @module model/Contact
*/
export default class Contact {
    /**
    * Constructs a new <code>Contact</code>.
    * @alias module:model/Contact
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Contact} obj Optional instance to populate.
    * @return {module:model/Contact} The populated <code>Contact</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            
            
            

            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
            if (data.hasOwnProperty('salutation')) {
                obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('mobile')) {
                obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('dob')) {
                obj['dob'] = ApiClient.convertToType(data['dob'], 'Date');
            }
            if (data.hasOwnProperty('picture')) {
                obj['picture'] = ApiClient.convertToType(data['picture'], 'String');
            }
            if (data.hasOwnProperty('url_website')) {
                obj['url_website'] = ApiClient.convertToType(data['url_website'], 'String');
            }
            if (data.hasOwnProperty('birthplace')) {
                obj['birthplace'] = ApiClient.convertToType(data['birthplace'], 'String');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
        }
        return obj;
    }

    /**
    * Forename
    * @member {String} forename
    */
    forename = undefined;
    /**
    * Surname
    * @member {String} surname
    */
    surname = undefined;
    /**
    * Company name
    * @member {String} companyname
    */
    companyname = undefined;
    /**
    * Salutation
    * @member {String} salutation
    */
    salutation = undefined;
    /**
    * Gender
    * @member {String} gender
    */
    gender = undefined;
    /**
    * Title
    * @member {String} title
    */
    title = undefined;
    /**
    * Email
    * @member {String} email
    */
    email = undefined;
    /**
    * Phone
    * @member {String} phone
    */
    phone = undefined;
    /**
    * Mobile
    * @member {String} mobile
    */
    mobile = undefined;
    /**
    * Fax
    * @member {String} fax
    */
    fax = undefined;
    /**
    * Date of birth
    * @member {Date} dob
    */
    dob = undefined;
    /**
    * The document id of an user picture (To upload the picture use our document service.)
    * @member {String} picture
    */
    picture = undefined;
    /**
    * URL to website
    * @member {String} url_website
    */
    url_website = undefined;
    /**
    * Birthplace
    * @member {String} birthplace
    */
    birthplace = undefined;
    /**
    * Nationality
    * @member {String} nationality
    */
    nationality = undefined;
    /**
    * Address
    * @member {module:model/Address} address
    */
    address = undefined;








}


