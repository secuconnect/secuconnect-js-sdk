
import ApiClient from '../ApiClient';
import LoyaltyCustomersProductModel from './LoyaltyCustomersProductModel';





/**
* The LoyaltyCustomersList model module.
* @module model/LoyaltyCustomersList
* @version 2.0.0
*/
export default class LoyaltyCustomersList {
    /**
    * Constructs a new <code>LoyaltyCustomersList</code>.
    * @alias module:model/LoyaltyCustomersList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCustomersList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersList} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersList} The populated <code>LoyaltyCustomersList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyCustomersProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing loyalty customers
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Loyalty/Customers
    * @member {Array.<module:model/LoyaltyCustomersProductModel>} data
    */
    data = undefined;








}


