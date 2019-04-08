
import ApiClient from '../ApiClient';
import SmartTransactionsReceiptValue from './SmartTransactionsReceiptValue';

/**
 * The SmartTransactionsReceipt model module.
 * @module model/SmartTransactionsReceipt
 */
export default class SmartTransactionsReceipt {
    /**
     * Constructs a new <code>SmartTransactionsReceipt</code>.
     * @alias module:model/SmartTransactionsReceipt
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsReceipt</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsReceipt} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsReceipt} The populated <code>SmartTransactionsReceipt</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsReceipt();
            
            
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = SmartTransactionsReceiptValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

    /**
     * Value
     * @member {module:model/SmartTransactionsReceiptValue} value
     */
    value = undefined;

}
