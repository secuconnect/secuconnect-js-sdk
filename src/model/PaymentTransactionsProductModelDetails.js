
import ApiClient from '../ApiClient';

/**
 * The PaymentTransactionsProductModelDetails model module.
 * @module model/PaymentTransactionsProductModelDetails
 */
export default class PaymentTransactionsProductModelDetails {
    /**
     * Constructs a new <code>PaymentTransactionsProductModelDetails</code>.
     * Transaction details
     * @alias module:model/PaymentTransactionsProductModelDetails
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModelDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModelDetails} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModelDetails} The populated <code>PaymentTransactionsProductModelDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsProductModelDetails();
            
            
            
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('cleared')) {
                obj['cleared'] = ApiClient.convertToType(data['cleared'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('status_text')) {
                obj['status_text'] = ApiClient.convertToType(data['status_text'], 'String');
            }
            if (data.hasOwnProperty('status_simple')) {
                obj['status_simple'] = ApiClient.convertToType(data['status_simple'], 'Number');
            }
            if (data.hasOwnProperty('status_text_simple')) {
                obj['status_text_simple'] = ApiClient.convertToType(data['status_text_simple'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('description_raw')) {
                obj['description_raw'] = ApiClient.convertToType(data['description_raw'], 'String');
            }
        }
        return obj;
    }

    /**
     * Total amount of payment in cents (or the smallest cash unit of the relevant currency)
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Clearing status
     * @member {String} cleared
     */
    cleared = undefined;

    /**
     * Transaction status ID
     * @member {Number} status
     */
    status = undefined;

    /**
     * Transaction status description
     * @member {String} status_text
     */
    status_text = undefined;

    /**
     * Transaction simple-status ID
     * @member {Number} status_simple
     */
    status_simple = undefined;

    /**
     * Transaction simple-status description
     * @member {String} status_text_simple
     */
    status_text_simple = undefined;

    /**
     * Transaction description
     * @member {String} description
     */
    description = undefined;

    /**
     * Transaction description (plain text)
     * @member {String} description_raw
     */
    description_raw = undefined;

}
