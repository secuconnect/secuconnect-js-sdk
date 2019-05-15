
import ApiClient from '../ApiClient';

/**
 * The InvitedBy model module.
 * @module model/InvitedBy
 */
export default class InvitedBy {
    /**
     * Constructs a new <code>InvitedBy</code>.
     * @alias module:model/InvitedBy
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>InvitedBy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvitedBy} obj Optional instance to populate.
    * @return {module:model/InvitedBy} The populated <code>InvitedBy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitedBy();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invited')) {
                obj['invited'] = ApiClient.convertToType(data['invited'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of invited by
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of invited by
     * @member {String} id
     */
    id = undefined;

    /**
     * Invited
     * @member {String} invited
     */
    invited = undefined;

}
