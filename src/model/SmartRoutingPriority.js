
import ApiClient from '../ApiClient';

/**
 * The SmartRoutingPriority model module.
 * @module model/SmartRoutingPriority
 */
export default class SmartRoutingPriority {
    /**
     * Constructs a new <code>SmartRoutingPriority</code>.
     * @alias module:model/SmartRoutingPriority
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartRoutingPriority</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingPriority} obj Optional instance to populate.
    * @return {module:model/SmartRoutingPriority} The populated <code>SmartRoutingPriority</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartRoutingPriority();
            
            
            
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Priority
     * @member {Number} priority
     */
    priority = undefined;

}
