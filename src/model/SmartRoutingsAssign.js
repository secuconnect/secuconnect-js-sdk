
import ApiClient from '../ApiClient';

/**
 * The SmartRoutingsAssign model module.
 * @module model/SmartRoutingsAssign
 */
export default class SmartRoutingsAssign {
    /**
     * Constructs a new <code>SmartRoutingsAssign</code>.
     * @alias module:model/SmartRoutingsAssign
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartRoutingsAssign</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsAssign} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsAssign} The populated <code>SmartRoutingsAssign</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartRoutingsAssign();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Object of smart routing assign
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of smart routing assign
     * @member {String} id
     */
    id = undefined;

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Priority
     * @member {Number} priority
     */
    priority = undefined;

}
