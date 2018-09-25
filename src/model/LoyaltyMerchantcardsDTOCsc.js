
import ApiClient from '../ApiClient';





/**
* The LoyaltyMerchantcardsDTOCsc model module.
* @module model/LoyaltyMerchantcardsDTOCsc
*/
export default class LoyaltyMerchantcardsDTOCsc {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOCsc</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOCsc
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOCsc</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOCsc} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOCsc} The populated <code>LoyaltyMerchantcardsDTOCsc</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOCsc();

            
            
            

            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'Number');
            }
            if (data.hasOwnProperty('csc')) {
                obj['csc'] = ApiClient.convertToType(data['csc'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Card number
    * @member {Number} cardnumber
    */
    cardnumber = undefined;
    /**
    * Card security code
    * @member {Number} csc
    */
    csc = undefined;








}


