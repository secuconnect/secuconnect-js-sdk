
import ApiClient from '../ApiClient';
import LoyaltyMerchantcardsDTOValidateMerchantCard from './LoyaltyMerchantcardsDTOValidateMerchantCard';





/**
* The LoyaltyMerchantcardsDTONewPasscode model module.
* @module model/LoyaltyMerchantcardsDTONewPasscode
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsDTONewPasscode {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTONewPasscode</code>.
    * @alias module:model/LoyaltyMerchantcardsDTONewPasscode
    * @class
    * @implements module:model/LoyaltyMerchantcardsDTOValidateMerchantCard
    */

    constructor() {
        

        
        LoyaltyMerchantcardsDTOValidateMerchantCard.call(this);

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTONewPasscode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTONewPasscode} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTONewPasscode} The populated <code>LoyaltyMerchantcardsDTONewPasscode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTONewPasscode();

            
            
            LoyaltyMerchantcardsDTOValidateMerchantCard.constructFromObject(data, obj);

            if (data.hasOwnProperty('passcode')) {
                obj['passcode'] = ApiClient.convertToType(data['passcode'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Loyalty Card passcode
    * @member {Number} passcode
    */
    passcode = undefined;


    // Implement LoyaltyMerchantcardsDTOValidateMerchantCard interface:
    /**
    * General Merchant id
    * @member {String} merchant
    */
    merchant = undefined;
/**
    * Loyalty Card number
    * @member {Number} cardnumber
    */
    cardnumber = undefined;







}


