
import ApiClient from '../ApiClient';

/**
 * The LoyaltyCardsDTOAccount model module.
 * @module model/LoyaltyCardsDTOAccount
 */
export default class LoyaltyCardsDTOAccount {
    /**
     * Constructs a new <code>LoyaltyCardsDTOAccount</code>.
     * @alias module:model/LoyaltyCardsDTOAccount
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyCardsDTOAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardsDTOAccount} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardsDTOAccount} The populated <code>LoyaltyCardsDTOAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardsDTOAccount();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * LoyaltyCardsDTOAccount
     * @member {String} object
     */
    object = undefined;

    /**
     * LoyaltyCardsDTOAccount
     * @member {String} id
     */
    id = undefined;

}
