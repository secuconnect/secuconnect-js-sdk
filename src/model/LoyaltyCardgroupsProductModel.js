
import ApiClient from '../ApiClient';
import LoyaltyCardgroupsDTOMerchant from './LoyaltyCardgroupsDTOMerchant';





/**
* The LoyaltyCardgroupsProductModel model module.
* @module model/LoyaltyCardgroupsProductModel
*/
export default class LoyaltyCardgroupsProductModel {
    /**
    * Constructs a new <code>LoyaltyCardgroupsProductModel</code>.
    * @alias module:model/LoyaltyCardgroupsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsProductModel} The populated <code>LoyaltyCardgroupsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardgroupsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = LoyaltyCardgroupsDTOMerchant.constructFromObject(data['merchant']);
            }
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
        }
        return obj;
    }

    /**
    * Object of loyalty card group
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of loyalty card group
    * @member {String} id
    */
    id = undefined;
    /**
    * Loyalty card group merchant
    * @member {module:model/LoyaltyCardgroupsDTOMerchant} merchant
    */
    merchant = undefined;
    /**
    * Loyalty card group display name
    * @member {String} display_name
    */
    display_name = undefined;
    /**
    * Loyalty card group display name raw
    * @member {String} display_name_raw
    */
    display_name_raw = undefined;
    /**
    * Loyalty card group stock warn limit
    * @member {String} stock_warn_limit
    */
    stock_warn_limit = undefined;
    /**
    * Loyalty card group picture
    * @member {String} picture
    */
    picture = undefined;








}


