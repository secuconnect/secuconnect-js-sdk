
import ApiClient from '../ApiClient';

/**
 * The Store model module.
 * @module model/Store
 */
export default class Store {
    /**
     * Constructs a new <code>Store</code>.
     * @alias module:model/Store
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Store} obj Optional instance to populate.
    * @return {module:model/Store} The populated <code>Store</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Store();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('name_raw')) {
                obj['name_raw'] = ApiClient.convertToType(data['name_raw'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of store
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of store
     * @member {String} id
     */
    id = undefined;

    /**
     * Store name
     * @member {String} name
     */
    name = undefined;

    /**
     * Store name raw
     * @member {String} name_raw
     */
    name_raw = undefined;

}
