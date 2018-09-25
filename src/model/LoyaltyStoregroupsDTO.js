
import ApiClient from '../ApiClient';





/**
* The LoyaltyStoregroupsDTO model module.
* @module model/LoyaltyStoregroupsDTO
* @version 2.0.0
*/
export default class LoyaltyStoregroupsDTO {
    /**
    * Constructs a new <code>LoyaltyStoregroupsDTO</code>.
    * @alias module:model/LoyaltyStoregroupsDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsDTO} The populated <code>LoyaltyStoregroupsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyStoregroupsDTO();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('stores')) {
                obj['stores'] = ApiClient.convertToType(data['stores'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Loyalty store group name
    * @member {String} name
    */
    name = undefined;
    /**
    * Loyalty store group merchant id
    * @member {String} merchant
    */
    merchant = undefined;
    /**
    * List of loyalty stores ids
    * @member {Array.<String>} stores
    */
    stores = undefined;








}


