
import ApiClient from '../ApiClient';

/**
 * The LoyaltyMerchantcardsDTO model module.
 * @module model/LoyaltyMerchantcardsDTO
 */
export default class LoyaltyMerchantcardsDTO {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTO</code>.
     * @alias module:model/LoyaltyMerchantcardsDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTO} The populated <code>LoyaltyMerchantcardsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTO();
            
            
            
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = ApiClient.convertToType(data['card'], 'String');
            }
            if (data.hasOwnProperty('payment_container')) {
                obj['payment_container'] = ApiClient.convertToType(data['payment_container'], 'String');
            }
            if (data.hasOwnProperty('created_by_merchant')) {
                obj['created_by_merchant'] = ApiClient.convertToType(data['created_by_merchant'], 'Boolean');
            }
            if (data.hasOwnProperty('used_by_merchant')) {
                obj['used_by_merchant'] = ApiClient.convertToType(data['used_by_merchant'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * General merchant id
     * @member {String} merchant
     */
    merchant = undefined;

    /**
     * Loyalty card id
     * @member {String} card
     */
    card = undefined;

    /**
     * Loyalty payment container id
     * @member {String} payment_container
     */
    payment_container = undefined;

    /**
     * Created by general merchant or not
     * @member {Boolean} created_by_merchant
     */
    created_by_merchant = undefined;

    /**
     * Used by general merchant or not
     * @member {Boolean} used_by_merchant
     */
    used_by_merchant = undefined;

}
