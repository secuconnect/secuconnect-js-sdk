
import ApiClient from '../ApiClient';
import LoyaltyMerchantcardsProductModel from './LoyaltyMerchantcardsProductModel';





/**
* The LoyaltyMerchantcardsList model module.
* @module model/LoyaltyMerchantcardsList
*/
export default class LoyaltyMerchantcardsList {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsList</code>.
    * @alias module:model/LoyaltyMerchantcardsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsList} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsList} The populated <code>LoyaltyMerchantcardsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyMerchantcardsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing loyalty merchant cards
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Loyalty/MerchantCards
    * @member {Array.<module:model/LoyaltyMerchantcardsProductModel>} data
    */
    data = undefined;








}


