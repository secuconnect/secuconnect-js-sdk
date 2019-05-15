
import ApiClient from '../ApiClient';

/**
 * The PrepaidSalesProductDTO model module.
 * @module model/PrepaidSalesProductDTO
 */
export default class PrepaidSalesProductDTO {
    /**
     * Constructs a new <code>PrepaidSalesProductDTO</code>.
     * @alias module:model/PrepaidSalesProductDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidSalesProductDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesProductDTO} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesProductDTO} The populated <code>PrepaidSalesProductDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidSalesProductDTO();
            
            
            
            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'String');
            }
        }
        return obj;
    }

    /**
     * prepaid sales transaction id
     * @member {String} item
     */
    item = undefined;

}
