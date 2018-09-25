
import ApiClient from '../ApiClient';
import LoyaltyDTOMerchant from './LoyaltyDTOMerchant';
import LoyaltyDTOStore from './LoyaltyDTOStore';





/**
* The LoyaltyStoregroupsProductModel model module.
* @module model/LoyaltyStoregroupsProductModel
*/
export default class LoyaltyStoregroupsProductModel {
    /**
    * Constructs a new <code>LoyaltyStoregroupsProductModel</code>.
    * @alias module:model/LoyaltyStoregroupsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyStoregroupsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyStoregroupsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyStoregroupsProductModel} The populated <code>LoyaltyStoregroupsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyStoregroupsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = LoyaltyDTOMerchant.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('stores')) {
                obj['stores'] = ApiClient.convertToType(data['stores'], [LoyaltyDTOStore]);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Object of loyalty store group
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of loyalty store group
    * @member {String} id
    */
    id = undefined;
    /**
    * Merchant data for loyalty
    * @member {module:model/LoyaltyDTOMerchant} merchant
    */
    merchant = undefined;
    /**
    * LoyaltyStoregroupsProductModel
    * @member {Array.<module:model/LoyaltyDTOStore>} stores
    */
    stores = undefined;
    /**
    * Creation date
    * @member {Date} created
    */
    created = undefined;
    /**
    * Update date
    * @member {Date} updated
    */
    updated = undefined;








}


