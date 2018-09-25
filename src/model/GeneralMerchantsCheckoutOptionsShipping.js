
import ApiClient from '../ApiClient';





/**
* The GeneralMerchantsCheckoutOptionsShipping model module.
* @module model/GeneralMerchantsCheckoutOptionsShipping
* @version 2.0.0
*/
export default class GeneralMerchantsCheckoutOptionsShipping {
    /**
    * Constructs a new <code>GeneralMerchantsCheckoutOptionsShipping</code>.
    * @alias module:model/GeneralMerchantsCheckoutOptionsShipping
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptionsShipping</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptionsShipping} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptionsShipping} The populated <code>GeneralMerchantsCheckoutOptionsShipping</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsCheckoutOptionsShipping();

            
            
            

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Enabled
    * @member {Boolean} enabled
    */
    enabled = undefined;








}


