
import ApiClient from '../ApiClient';
import PaymentTransactionsProductModel from './PaymentTransactionsProductModel';

/**
 * The PaymentTransactionsList model module.
 * @module model/PaymentTransactionsList
 */
export default class PaymentTransactionsList {
    /**
     * Constructs a new <code>PaymentTransactionsList</code>.
     * @alias module:model/PaymentTransactionsList
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentTransactionsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsList} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsList} The populated <code>PaymentTransactionsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsList();
            
            
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentTransactionsProductModel]);
            }
        }
        return obj;
    }

    /**
     * Number of existing payment transactions
     * @member {Number} count
     */
    count = undefined;

    /**
     * GET Payment/Transactions
     * @member {Array.<module:model/PaymentTransactionsProductModel>} data
     */
    data = undefined;

}
