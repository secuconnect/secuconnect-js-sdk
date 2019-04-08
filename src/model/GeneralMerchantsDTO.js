
import ApiClient from '../ApiClient';
import Address from './Address';
import GeneralMerchantsCheckoutOptions from './GeneralMerchantsCheckoutOptions';
import GeneralMerchantsLegalDetails from './GeneralMerchantsLegalDetails';
import GeneralMerchantsUrls from './GeneralMerchantsUrls';
import PaymentInformation from './PaymentInformation';

/**
 * The GeneralMerchantsDTO model module.
 * @module model/GeneralMerchantsDTO
 */
export default class GeneralMerchantsDTO {
    /**
     * Constructs a new <code>GeneralMerchantsDTO</code>.
     * @alias module:model/GeneralMerchantsDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralMerchantsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsDTO} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsDTO} The populated <code>GeneralMerchantsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsDTO();
            
            
            
            if (data.hasOwnProperty('salutation')) {
                obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
            }
            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('dob')) {
                obj['dob'] = ApiClient.convertToType(data['dob'], 'String');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('payment_data')) {
                obj['payment_data'] = PaymentInformation.constructFromObject(data['payment_data']);
            }
            if (data.hasOwnProperty('legal_details')) {
                obj['legal_details'] = ApiClient.convertToType(data['legal_details'], [GeneralMerchantsLegalDetails]);
            }
            if (data.hasOwnProperty('checkout_options')) {
                obj['checkout_options'] = GeneralMerchantsCheckoutOptions.constructFromObject(data['checkout_options']);
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], [GeneralMerchantsUrls]);
            }
        }
        return obj;
    }

    /**
     * Salutation
     * @member {String} salutation
     */
    salutation = undefined;

    /**
     * companyname
     * @member {String} companyname
     */
    companyname = undefined;

    /**
     * forename
     * @member {String} forename
     */
    forename = undefined;

    /**
     * surname
     * @member {String} surname
     */
    surname = undefined;

    /**
     * Date of birth
     * @member {String} dob
     */
    dob = undefined;

    /**
     * Merchant homepage url or shop url
     * @member {String} homepage
     */
    homepage = undefined;

    /**
     * Merchant email address
     * @member {String} email
     */
    email = undefined;

    /**
     * Merchant phone number
     * @member {String} phone
     */
    phone = undefined;

    /**
     * Address
     * @member {module:model/Address} address
     */
    address = undefined;

    /**
     * Merchants bank account for the payout
     * @member {module:model/PaymentInformation} payment_data
     */
    payment_data = undefined;

    /**
     * Legal details
     * @member {Array.<module:model/GeneralMerchantsLegalDetails>} legal_details
     */
    legal_details = undefined;

    /**
     * Checkout options
     * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
     */
    checkout_options = undefined;

    /**
     * Urls
     * @member {Array.<module:model/GeneralMerchantsUrls>} urls
     */
    urls = undefined;

}
