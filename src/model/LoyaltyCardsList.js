
import ApiClient from '../ApiClient';
import LoyaltyCardsProductModel from './LoyaltyCardsProductModel';





/**
* The LoyaltyCardsList model module.
* @module model/LoyaltyCardsList
*/
export default class LoyaltyCardsList {
    /**
    * Constructs a new <code>LoyaltyCardsList</code>.
    * @alias module:model/LoyaltyCardsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCardsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardsList} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardsList} The populated <code>LoyaltyCardsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyCardsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing loyalty cards
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Loyalty/Cards
    * @member {Array.<module:model/LoyaltyCardsProductModel>} data
    */
    data = undefined;








}


