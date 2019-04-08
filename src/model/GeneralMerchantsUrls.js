
import ApiClient from '../ApiClient';

/**
 * The GeneralMerchantsUrls model module.
 * @module model/GeneralMerchantsUrls
 */
export default class GeneralMerchantsUrls {
    /**
     * Constructs a new <code>GeneralMerchantsUrls</code>.
     * @alias module:model/GeneralMerchantsUrls
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralMerchantsUrls</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsUrls} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsUrls} The populated <code>GeneralMerchantsUrls</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsUrls();
            
            
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Type of urls
     * @member {String} type
     */
    type = undefined;

    /**
     * Url
     * @member {String} url
     */
    url = undefined;

}
