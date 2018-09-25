
import ApiClient from '../ApiClient';





/**
* The LoyaltyDTOMerchant model module.
* @module model/LoyaltyDTOMerchant
* @version 2.0.0
*/
export default class LoyaltyDTOMerchant {
    /**
    * Constructs a new <code>LoyaltyDTOMerchant</code>.
    * @alias module:model/LoyaltyDTOMerchant
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyDTOMerchant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyDTOMerchant} obj Optional instance to populate.
    * @return {module:model/LoyaltyDTOMerchant} The populated <code>LoyaltyDTOMerchant</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyDTOMerchant();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * LoyaltyDTOMerchant
    * @member {String} object
    */
    object = undefined;
    /**
    * LoyaltyDTOMerchant
    * @member {String} id
    */
    id = undefined;








}


