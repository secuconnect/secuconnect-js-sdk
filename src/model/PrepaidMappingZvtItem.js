
import ApiClient from '../ApiClient';

/**
 * The PrepaidMappingZvtItem model module.
 * @module model/PrepaidMappingZvtItem
 */
export default class PrepaidMappingZvtItem {
    /**
     * Constructs a new <code>PrepaidMappingZvtItem</code>.
     * Prepaid item
     * @alias module:model/PrepaidMappingZvtItem
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidMappingZvtItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidMappingZvtItem} obj Optional instance to populate.
    * @return {module:model/PrepaidMappingZvtItem} The populated <code>PrepaidMappingZvtItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidMappingZvtItem();
            
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * prepaid item id
     * @member {Number} id
     */
    id = undefined;

}
