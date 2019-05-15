
import ApiClient from '../ApiClient';

/**
 * The AssignedBy model module.
 * @module model/AssignedBy
 */
export default class AssignedBy {
    /**
     * Constructs a new <code>AssignedBy</code>.
     * @alias module:model/AssignedBy
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>AssignedBy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssignedBy} obj Optional instance to populate.
    * @return {module:model/AssignedBy} The populated <code>AssignedBy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignedBy();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Object of assigned by
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of assigned by
     * @member {String} id
     */
    id = undefined;

    /**
     * Owner
     * @member {Boolean} owner
     */
    owner = undefined;

}
