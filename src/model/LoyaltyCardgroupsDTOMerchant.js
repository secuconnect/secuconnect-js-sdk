
import ApiClient from '../ApiClient';

/**
 * The LoyaltyCardgroupsDTOMerchant model module.
 * @module model/LoyaltyCardgroupsDTOMerchant
 */
export default class LoyaltyCardgroupsDTOMerchant {
    /**
     * Constructs a new <code>LoyaltyCardgroupsDTOMerchant</code>.
     * @alias module:model/LoyaltyCardgroupsDTOMerchant
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsDTOMerchant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsDTOMerchant} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsDTOMerchant} The populated <code>LoyaltyCardgroupsDTOMerchant</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardgroupsDTOMerchant();
            
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Merchant id
     * @member {String} id
     */
    id = undefined;

}
