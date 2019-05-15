
import ApiClient from '../ApiClient';

/**
 * The PrepaidZvtDTO model module.
 * @module model/PrepaidZvtDTO
 */
export default class PrepaidZvtDTO {
    /**
     * Constructs a new <code>PrepaidZvtDTO</code>.
     * @alias module:model/PrepaidZvtDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidZvtDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidZvtDTO} obj Optional instance to populate.
    * @return {module:model/PrepaidZvtDTO} The populated <code>PrepaidZvtDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidZvtDTO();
            
            
            
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * amount
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Product identifier
     * @member {Number} product_id
     */
    product_id = undefined;

}
