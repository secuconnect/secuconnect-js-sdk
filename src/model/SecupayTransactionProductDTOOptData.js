
import ApiClient from '../ApiClient';

/**
 * The SecupayTransactionProductDTOOptData model module.
 * @module model/SecupayTransactionProductDTOOptData
 */
export default class SecupayTransactionProductDTOOptData {
    /**
     * Constructs a new <code>SecupayTransactionProductDTOOptData</code>.
     * Options for customizing the checkout page
     * @alias module:model/SecupayTransactionProductDTOOptData
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOOptData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOOptData} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOOptData} The populated <code>SecupayTransactionProductDTOOptData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductDTOOptData();
            
            
            
            if (data.hasOwnProperty('has_accepted_disclaimer')) {
                obj['has_accepted_disclaimer'] = ApiClient.convertToType(data['has_accepted_disclaimer'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Customer accepted disclaimer
     * @member {String} has_accepted_disclaimer
     */
    has_accepted_disclaimer = undefined;

    /**
     * Client language
     * @member {String} language
     */
    language = undefined;

}
