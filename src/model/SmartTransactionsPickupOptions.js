
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';

/**
 * The SmartTransactionsPickupOptions model module.
 * @module model/SmartTransactionsPickupOptions
 */
export default class SmartTransactionsPickupOptions {
    /**
     * Constructs a new <code>SmartTransactionsPickupOptions</code>.
     * @alias module:model/SmartTransactionsPickupOptions
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsPickupOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPickupOptions} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPickupOptions} The populated <code>SmartTransactionsPickupOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsPickupOptions();
            
            
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ProductInstanceUID.constructFromObject(data['store']);
            }
        }
        return obj;
    }

    /**
     * Code
     * @member {String} code
     */
    code = undefined;

    /**
     * Date
     * @member {String} date
     */
    date = undefined;

    /**
     * Store
     * @member {module:model/ProductInstanceUID} store
     */
    store = undefined;

}
