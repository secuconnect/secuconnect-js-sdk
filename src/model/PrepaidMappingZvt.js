
import ApiClient from '../ApiClient';
import PrepaidMappingZvtItem from './PrepaidMappingZvtItem';

/**
 * The PrepaidMappingZvt model module.
 * @module model/PrepaidMappingZvt
 */
export default class PrepaidMappingZvt {
    /**
     * Constructs a new <code>PrepaidMappingZvt</code>.
     * @alias module:model/PrepaidMappingZvt
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidMappingZvt</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidMappingZvt} obj Optional instance to populate.
    * @return {module:model/PrepaidMappingZvt} The populated <code>PrepaidMappingZvt</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidMappingZvt();
            
            
            
            if (data.hasOwnProperty('item')) {
                obj['item'] = PrepaidMappingZvtItem.constructFromObject(data['item']);
            }
            if (data.hasOwnProperty('vtc_id')) {
                obj['vtc_id'] = ApiClient.convertToType(data['vtc_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * @member {module:model/PrepaidMappingZvtItem} item
     */
    item = undefined;

    /**
     * Vtc id
     * @member {String} vtc_id
     */
    vtc_id = undefined;

}
