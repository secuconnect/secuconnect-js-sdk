
import ApiClient from '../ApiClient';
import GeneralMerchantsProductModel from './GeneralMerchantsProductModel';





/**
* The GeneralMerchantsList model module.
* @module model/GeneralMerchantsList
* @version 2.0.0
*/
export default class GeneralMerchantsList {
    /**
    * Constructs a new <code>GeneralMerchantsList</code>.
    * @alias module:model/GeneralMerchantsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsList} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsList} The populated <code>GeneralMerchantsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [GeneralMerchantsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing general merchants
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET General/Merchants
    * @member {Array.<module:model/GeneralMerchantsProductModel>} data
    */
    data = undefined;








}


