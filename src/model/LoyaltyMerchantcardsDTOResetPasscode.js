
import ApiClient from '../ApiClient';

/**
 * The LoyaltyMerchantcardsDTOResetPasscode model module.
 * @module model/LoyaltyMerchantcardsDTOResetPasscode
 */
export default class LoyaltyMerchantcardsDTOResetPasscode {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTOResetPasscode</code>.
     * @alias module:model/LoyaltyMerchantcardsDTOResetPasscode
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOResetPasscode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOResetPasscode} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOResetPasscode} The populated <code>LoyaltyMerchantcardsDTOResetPasscode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOResetPasscode();
            
            
            
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'Number');
            }
            if (data.hasOwnProperty('passcode')) {
                obj['passcode'] = ApiClient.convertToType(data['passcode'], 'Number');
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
     * Loyalty Card passcode
     * @member {Number} passcode
     */
    passcode = undefined;

}
