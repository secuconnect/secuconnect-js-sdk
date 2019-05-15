
import ApiClient from '../ApiClient';

/**
 * The SecupayTransactionCaptureDTO model module.
 * @module model/SecupayTransactionCaptureDTO
 */
export default class SecupayTransactionCaptureDTO {
    /**
     * Constructs a new <code>SecupayTransactionCaptureDTO</code>.
     * @alias module:model/SecupayTransactionCaptureDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionCaptureDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionCaptureDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionCaptureDTO} The populated <code>SecupayTransactionCaptureDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionCaptureDTO();
            
            
            
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], Object);
            }
        }
        return obj;
    }

    /**
     * The payment contract object
     * @member {Object} contract
     */
    contract = undefined;

}
