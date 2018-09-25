
import ApiClient from '../ApiClient';
import LoyaltyCardgroupsProductModel from './LoyaltyCardgroupsProductModel';





/**
* The LoyaltyCardgroupsList model module.
* @module model/LoyaltyCardgroupsList
*/
export default class LoyaltyCardgroupsList {
    /**
    * Constructs a new <code>LoyaltyCardgroupsList</code>.
    * @alias module:model/LoyaltyCardgroupsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsList} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsList} The populated <code>LoyaltyCardgroupsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardgroupsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyCardgroupsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing loyalty card groups
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Loyalty/Cardgroups
    * @member {Array.<module:model/LoyaltyCardgroupsProductModel>} data
    */
    data = undefined;








}


