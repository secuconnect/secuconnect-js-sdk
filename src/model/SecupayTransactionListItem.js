
import ApiClient from '../ApiClient';

/**
 * The SecupayTransactionListItem model module.
 * @module model/SecupayTransactionListItem
 */
export default class SecupayTransactionListItem {
    /**
     * Constructs a new <code>SecupayTransactionListItem</code>.
     * @alias module:model/SecupayTransactionListItem
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionListItem} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionListItem} The populated <code>SecupayTransactionListItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionListItem();
            
            
            
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
            if (data.hasOwnProperty('reference_id')) {
                obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('transaction_hash')) {
                obj['transaction_hash'] = ApiClient.convertToType(data['transaction_hash'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Category of item
     * @member {String} item_type
     * @default 'transaction_payout'
     */
    item_type = 'transaction_payout';

    /**
     * Reference id - must be unique for the entire basket
     * @member {String} reference_id
     */
    reference_id = undefined;

    /**
     * Item name
     * @member {String} name
     */
    name = undefined;

    /**
     * Id of transaction
     * @member {String} transaction_hash
     */
    transaction_hash = undefined;

    /**
     * Id of transaction
     * @member {String} transaction_id
     */
    transaction_id = undefined;

    /**
     * Payment Container ID
     * @member {String} container
     */
    container = undefined;

    /**
     * Total price
     * @member {Number} total
     */
    total = undefined;

}
