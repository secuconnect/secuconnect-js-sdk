
import ApiClient from '../ApiClient';

/**
 * The LoyaltyMerchantcardsValidateMerchantCard model module.
 * @module model/LoyaltyMerchantcardsValidateMerchantCard
 */
export default class LoyaltyMerchantcardsValidateMerchantCard {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsValidateMerchantCard</code>.
     * @alias module:model/LoyaltyMerchantcardsValidateMerchantCard
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsValidateMerchantCard</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsValidateMerchantCard} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsValidateMerchantCard} The populated <code>LoyaltyMerchantcardsValidateMerchantCard</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsValidateMerchantCard();
            
            
            
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
            if (data.hasOwnProperty('hasPasscode')) {
                obj['hasPasscode'] = ApiClient.convertToType(data['hasPasscode'], 'Boolean');
            }
            if (data.hasOwnProperty('isLocked')) {
                obj['isLocked'] = ApiClient.convertToType(data['isLocked'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Result has true or false value
     * @member {Boolean} isValid
     */
    isValid = undefined;

    /**
     * Result has true or false value
     * @member {Boolean} hasPasscode
     */
    hasPasscode = undefined;

    /**
     * Result has true or false value
     * @member {Boolean} isLocked
     */
    isLocked = undefined;

}
