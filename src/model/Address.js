
import ApiClient from '../ApiClient';

/**
 * The Address model module.
 * @module model/Address
 */
export default class Address {
    /**
     * Constructs a new <code>Address</code>.
     * Address
     * @alias module:model/Address
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Address} obj Optional instance to populate.
    * @return {module:model/Address} The populated <code>Address</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();
            
            
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('street_number')) {
                obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

    /**
     * Street
     * @member {String} street
     */
    street = undefined;

    /**
     * Street number
     * @member {String} street_number
     */
    street_number = undefined;

    /**
     * City
     * @member {String} city
     */
    city = undefined;

    /**
     * Postal code
     * @member {String} postal_code
     */
    postal_code = undefined;

    /**
     * Country
     * @member {String} country
     */
    country = undefined;

}
