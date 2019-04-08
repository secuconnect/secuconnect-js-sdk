
import ApiClient from '../ApiClient';

/**
 * The ReceiptType model module.
 * @module model/ReceiptType
 */
export default class ReceiptType {
    /**
     * Constructs a new <code>ReceiptType</code>.
     * @alias module:model/ReceiptType
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>ReceiptType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReceiptType} obj Optional instance to populate.
    * @return {module:model/ReceiptType} The populated <code>ReceiptType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptType();
            
            
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

}
