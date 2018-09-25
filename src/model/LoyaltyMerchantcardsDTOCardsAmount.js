
import ApiClient from '../ApiClient';





/**
* The LoyaltyMerchantcardsDTOCardsAmount model module.
* @module model/LoyaltyMerchantcardsDTOCardsAmount
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsDTOCardsAmount {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOCardsAmount</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOCardsAmount
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOCardsAmount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOCardsAmount} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOCardsAmount} The populated <code>LoyaltyMerchantcardsDTOCardsAmount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOCardsAmount();

            
            
            

            if (data.hasOwnProperty('cards_amount')) {
                obj['cards_amount'] = ApiClient.convertToType(data['cards_amount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Cards amount
    * @member {Number} cards_amount
    */
    cards_amount = undefined;








}


