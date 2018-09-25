
import ApiClient from '../ApiClient';
import LoyaltyCardgroupsDTOMerchant from './LoyaltyCardgroupsDTOMerchant';





/**
* The LoyaltyCardgroupsDTO model module.
* @module model/LoyaltyCardgroupsDTO
*/
export default class LoyaltyCardgroupsDTO {
    /**
    * Constructs a new <code>LoyaltyCardgroupsDTO</code>.
    * @alias module:model/LoyaltyCardgroupsDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsDTO} The populated <code>LoyaltyCardgroupsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardgroupsDTO();

            
            
            

            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('display_name_raw')) {
                obj['display_name_raw'] = ApiClient.convertToType(data['display_name_raw'], 'String');
            }
            if (data.hasOwnProperty('stock_warn_limit')) {
                obj['stock_warn_limit'] = ApiClient.convertToType(data['stock_warn_limit'], 'String');
            }
            if (data.hasOwnProperty('picture')) {
                obj['picture'] = ApiClient.convertToType(data['picture'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = LoyaltyCardgroupsDTOMerchant.constructFromObject(data['merchant']);
            }
        }
        return obj;
    }

    /**
    * Display name
    * @member {String} display_name
    */
    display_name = undefined;
    /**
    * Display name raw
    * @member {String} display_name_raw
    */
    display_name_raw = undefined;
    /**
    * Stock warn limit
    * @member {String} stock_warn_limit
    */
    stock_warn_limit = undefined;
    /**
    * Picture
    * @member {String} picture
    */
    picture = undefined;
    /**
    * LoyaltyCardgroupsDTO
    * @member {module:model/LoyaltyCardgroupsDTOMerchant} merchant
    */
    merchant = undefined;








}


