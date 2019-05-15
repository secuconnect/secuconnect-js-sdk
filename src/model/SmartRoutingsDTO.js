
import ApiClient from '../ApiClient';

/**
 * The SmartRoutingsDTO model module.
 * @module model/SmartRoutingsDTO
 */
export default class SmartRoutingsDTO {
    /**
     * Constructs a new <code>SmartRoutingsDTO</code>.
     * @alias module:model/SmartRoutingsDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartRoutingsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsDTO} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsDTO} The populated <code>SmartRoutingsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartRoutingsDTO();
            
            
            
            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * General store ID
     * @member {String} store
     */
    store = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

}
