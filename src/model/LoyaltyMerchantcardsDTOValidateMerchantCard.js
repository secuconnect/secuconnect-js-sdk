
import ApiClient from '../ApiClient';





/**
* The LoyaltyMerchantcardsDTOValidateMerchantCard model module.
* @module model/LoyaltyMerchantcardsDTOValidateMerchantCard
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsDTOValidateMerchantCard {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOValidateMerchantCard
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard} The populated <code>LoyaltyMerchantcardsDTOValidateMerchantCard</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOValidateMerchantCard();

            
            
            

            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'Number');
            }
        }
        return obj;
    }

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


