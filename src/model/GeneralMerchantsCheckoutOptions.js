
import ApiClient from '../ApiClient';
import GeneralMerchantsCheckoutOptionsCollection from './GeneralMerchantsCheckoutOptionsCollection';
import GeneralMerchantsCheckoutOptionsShipping from './GeneralMerchantsCheckoutOptionsShipping';





/**
* The GeneralMerchantsCheckoutOptions model module.
* @module model/GeneralMerchantsCheckoutOptions
*/
export default class GeneralMerchantsCheckoutOptions {
    /**
    * Constructs a new <code>GeneralMerchantsCheckoutOptions</code>.
    * @alias module:model/GeneralMerchantsCheckoutOptions
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptions} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptions} The populated <code>GeneralMerchantsCheckoutOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsCheckoutOptions();

            
            
            

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = GeneralMerchantsCheckoutOptionsShipping.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = GeneralMerchantsCheckoutOptionsCollection.constructFromObject(data['collection']);
            }
        }
        return obj;
    }

    /**
    * Enabled
    * @member {Boolean} enabled
    */
    enabled = undefined;
    /**
    * Shipping
    * @member {module:model/GeneralMerchantsCheckoutOptionsShipping} shipping
    */
    shipping = undefined;
    /**
    * Collection
    * @member {module:model/GeneralMerchantsCheckoutOptionsCollection} collection
    */
    collection = undefined;








}


