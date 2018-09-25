
import ApiClient from '../ApiClient';
import GeneralMerchantsCheckoutOptions from './GeneralMerchantsCheckoutOptions';
import GeneralMerchantsLegalDetails from './GeneralMerchantsLegalDetails';
import GeneralMerchantsUrls from './GeneralMerchantsUrls';





/**
* The GeneralMerchantsDTO model module.
* @module model/GeneralMerchantsDTO
* @version 2.0.0
*/
export default class GeneralMerchantsDTO {
    /**
    * Constructs a new <code>GeneralMerchantsDTO</code>.
    * @alias module:model/GeneralMerchantsDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsDTO} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsDTO} The populated <code>GeneralMerchantsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsDTO();

            
            
            

            if (data.hasOwnProperty('legal_details')) {
                obj['legal_details'] = ApiClient.convertToType(data['legal_details'], [GeneralMerchantsLegalDetails]);
            }
            if (data.hasOwnProperty('checkout_options')) {
                obj['checkout_options'] = GeneralMerchantsCheckoutOptions.constructFromObject(data['checkout_options']);
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], [GeneralMerchantsUrls]);
            }
        }
        return obj;
    }

    /**
    * Legal details
    * @member {Array.<module:model/GeneralMerchantsLegalDetails>} legal_details
    */
    legal_details = undefined;
    /**
    * Checkout options
    * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
    */
    checkout_options = undefined;
    /**
    * Urls
    * @member {Array.<module:model/GeneralMerchantsUrls>} urls
    */
    urls = undefined;








}


