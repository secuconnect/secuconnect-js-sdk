
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';

/**
 * The SmartTransactionsPrepare model module.
 * @module model/SmartTransactionsPrepare
 */
export default class SmartTransactionsPrepare {
    /**
     * Constructs a new <code>SmartTransactionsPrepare</code>.
     * @alias module:model/SmartTransactionsPrepare
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsPrepare</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPrepare} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPrepare} The populated <code>SmartTransactionsPrepare</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsPrepare();
            
            
            
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ProductInstanceUID.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ProductInstanceUID.constructFromObject(data['container']);
            }
        }
        return obj;
    }

    /**
     * Customer
     * @member {module:model/ProductInstanceUID} customer
     */
    customer = undefined;

    /**
     * Container
     * @member {module:model/ProductInstanceUID} container
     */
    container = undefined;

}
