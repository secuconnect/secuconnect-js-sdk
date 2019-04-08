
import ApiClient from '../ApiClient';
import SmartRoutingsProductModel from './SmartRoutingsProductModel';

/**
 * The SmartRoutingsList model module.
 * @module model/SmartRoutingsList
 */
export default class SmartRoutingsList {
    /**
     * Constructs a new <code>SmartRoutingsList</code>.
     * @alias module:model/SmartRoutingsList
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartRoutingsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsList} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsList} The populated <code>SmartRoutingsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartRoutingsList();
            
            
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SmartRoutingsProductModel]);
            }
        }
        return obj;
    }

    /**
     * Number of existing smart routings
     * @member {Number} count
     */
    count = undefined;

    /**
     * GET Smart/Routings
     * @member {Array.<module:model/SmartRoutingsProductModel>} data
     */
    data = undefined;

}
