
import ApiClient from '../ApiClient';
import SecupayBasketItem from './SecupayBasketItem';

/**
 * The SecupayTransactionUpdateBasketDTO model module.
 * @module model/SecupayTransactionUpdateBasketDTO
 */
export default class SecupayTransactionUpdateBasketDTO {
    /**
     * Constructs a new <code>SecupayTransactionUpdateBasketDTO</code>.
     * @alias module:model/SecupayTransactionUpdateBasketDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionUpdateBasketDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionUpdateBasketDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionUpdateBasketDTO} The populated <code>SecupayTransactionUpdateBasketDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionUpdateBasketDTO();
            
            
            
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], Object);
            }
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = ApiClient.convertToType(data['basket'], [SecupayBasketItem]);
            }
        }
        return obj;
    }

    /**
     * The payment contract object
     * @member {Object} contract
     */
    contract = undefined;

    /**
     * A list of items that are being purchased.
     * @member {Array.<module:model/SecupayBasketItem>} basket
     */
    basket = undefined;

}
