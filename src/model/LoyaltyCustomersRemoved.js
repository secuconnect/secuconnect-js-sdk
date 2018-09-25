
import ApiClient from '../ApiClient';





/**
* The LoyaltyCustomersRemoved model module.
* @module model/LoyaltyCustomersRemoved
* @version 2.0.0
*/
export default class LoyaltyCustomersRemoved {
    /**
    * Constructs a new <code>LoyaltyCustomersRemoved</code>.
    * @alias module:model/LoyaltyCustomersRemoved
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCustomersRemoved</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersRemoved} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersRemoved} The populated <code>LoyaltyCustomersRemoved</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersRemoved();

            
            
            

            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Result is true or false
    * @member {Boolean} deleted
    */
    deleted = undefined;








}


