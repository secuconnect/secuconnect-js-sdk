
import ApiClient from '../ApiClient';
import LoyaltyStoregroupsProductModel from './LoyaltyStoregroupsProductModel';





/**
* The LoyaltyStoregroupsList model module.
* @module model/LoyaltyStoregroupsList
*/
export default class LoyaltyStoregroupsList {
    /**
    * Constructs a new <code>LoyaltyStoregroupsList</code>.
    * @alias module:model/LoyaltyStoregroupsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsList} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsList} The populated <code>LoyaltyStoregroupsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyStoregroupsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyStoregroupsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing loyalty store groups
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Loyalty/StoreGroups
    * @member {Array.<module:model/LoyaltyStoregroupsProductModel>} data
    */
    data = undefined;








}


