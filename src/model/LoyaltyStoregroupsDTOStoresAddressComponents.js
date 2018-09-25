
import ApiClient from '../ApiClient';





/**
* The LoyaltyStoregroupsDTOStoresAddressComponents model module.
* @module model/LoyaltyStoregroupsDTOStoresAddressComponents
* @version 2.0.0
*/
export default class LoyaltyStoregroupsDTOStoresAddressComponents {
    /**
    * Constructs a new <code>LoyaltyStoregroupsDTOStoresAddressComponents</code>.
    * @alias module:model/LoyaltyStoregroupsDTOStoresAddressComponents
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsDTOStoresAddressComponents</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsDTOStoresAddressComponents} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsDTOStoresAddressComponents} The populated <code>LoyaltyStoregroupsDTOStoresAddressComponents</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyStoregroupsDTOStoresAddressComponents();

            
            
            

            if (data.hasOwnProperty('long_name')) {
                obj['long_name'] = ApiClient.convertToType(data['long_name'], 'String');
            }
            if (data.hasOwnProperty('short_name')) {
                obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
            }
            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], 'String');
            }
        }
        return obj;
    }

    /**
    * Long name
    * @member {String} long_name
    */
    long_name = undefined;
    /**
    * Short name
    * @member {String} short_name
    */
    short_name = undefined;
    /**
    * Types
    * @member {String} types
    */
    types = undefined;








}


