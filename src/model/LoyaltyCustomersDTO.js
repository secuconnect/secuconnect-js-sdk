
import ApiClient from '../ApiClient';
import Contact from './Contact';

/**
 * The LoyaltyCustomersDTO model module.
 * @module model/LoyaltyCustomersDTO
 */
export default class LoyaltyCustomersDTO {
    /**
     * Constructs a new <code>LoyaltyCustomersDTO</code>.
     * @alias module:model/LoyaltyCustomersDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyCustomersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersDTO} The populated <code>LoyaltyCustomersDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersDTO();
            
            
            
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('merchant_contact')) {
                obj['merchant_contact'] = Contact.constructFromObject(data['merchant_contact']);
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('days_until_birthday')) {
                obj['days_until_birthday'] = ApiClient.convertToType(data['days_until_birthday'], 'Number');
            }
            if (data.hasOwnProperty('customernumber')) {
                obj['customernumber'] = ApiClient.convertToType(data['customernumber'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], Object);
            }
        }
        return obj;
    }

    /**
     * merchant
     * @member {String} merchant
     */
    merchant = undefined;

    /**
     * Contact
     * @member {module:model/Contact} merchant_contact
     */
    merchant_contact = undefined;

    /**
     * Age
     * @member {Number} age
     */
    age = undefined;

    /**
     * Number of days until birthday
     * @member {Number} days_until_birthday
     */
    days_until_birthday = undefined;

    /**
     * Customer number
     * @member {String} customernumber
     */
    customernumber = undefined;

    /**
     * note
     * @member {String} note
     */
    note = undefined;

    /**
     * Consent for communication
     * @member {Object} additional_data
     */
    additional_data = undefined;

}
