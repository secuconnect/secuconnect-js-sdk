
import ApiClient from '../ApiClient';

/**
 * The GeneralStoresDTOReason model module.
 * @module model/GeneralStoresDTOReason
 */
export default class GeneralStoresDTOReason {
    /**
     * Constructs a new <code>GeneralStoresDTOReason</code>.
     * @alias module:model/GeneralStoresDTOReason
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralStoresDTOReason</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresDTOReason} obj Optional instance to populate.
    * @return {module:model/GeneralStoresDTOReason} The populated <code>GeneralStoresDTOReason</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralStoresDTOReason();
            
            
            
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Reason
     * @member {String} reason
     */
    reason = undefined;

}
