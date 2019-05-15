
import ApiClient from '../ApiClient';
import GeneralStoresProductModel from './GeneralStoresProductModel';

/**
 * The GeneralStoresList model module.
 * @module model/GeneralStoresList
 */
export default class GeneralStoresList {
    /**
     * Constructs a new <code>GeneralStoresList</code>.
     * @alias module:model/GeneralStoresList
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralStoresList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresList} obj Optional instance to populate.
    * @return {module:model/GeneralStoresList} The populated <code>GeneralStoresList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralStoresList();
            
            
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [GeneralStoresProductModel]);
            }
        }
        return obj;
    }

    /**
     * Number of existing general stores
     * @member {Number} count
     */
    count = undefined;

    /**
     * GET General/Stores
     * @member {Array.<module:model/GeneralStoresProductModel>} data
     */
    data = undefined;

}
