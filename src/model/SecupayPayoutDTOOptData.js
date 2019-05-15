
import ApiClient from '../ApiClient';

/**
 * The SecupayPayoutDTOOptData model module.
 * @module model/SecupayPayoutDTOOptData
 */
export default class SecupayPayoutDTOOptData {
    /**
     * Constructs a new <code>SecupayPayoutDTOOptData</code>.
     * Options for customizing the checkout page
     * @alias module:model/SecupayPayoutDTOOptData
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayPayoutDTOOptData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayPayoutDTOOptData} obj Optional instance to populate.
    * @return {module:model/SecupayPayoutDTOOptData} The populated <code>SecupayPayoutDTOOptData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayPayoutDTOOptData();
            
            
            
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Client language
     * @member {String} language
     */
    language = undefined;

}
