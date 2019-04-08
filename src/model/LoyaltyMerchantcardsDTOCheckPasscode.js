
import ApiClient from '../ApiClient';

/**
 * The LoyaltyMerchantcardsDTOCheckPasscode model module.
 * @module model/LoyaltyMerchantcardsDTOCheckPasscode
 */
export default class LoyaltyMerchantcardsDTOCheckPasscode {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTOCheckPasscode</code>.
     * @alias module:model/LoyaltyMerchantcardsDTOCheckPasscode
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOCheckPasscode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOCheckPasscode} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOCheckPasscode} The populated <code>LoyaltyMerchantcardsDTOCheckPasscode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOCheckPasscode();
            
            
            
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'Number');
            }
            if (data.hasOwnProperty('pin')) {
                obj['pin'] = ApiClient.convertToType(data['pin'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Loyalty Card number
     * @member {Number} cardnumber
     */
    cardnumber = undefined;

    /**
     * Loyalty Card pin
     * @member {Number} pin
     */
    pin = undefined;

}
