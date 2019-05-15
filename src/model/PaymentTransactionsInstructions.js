
import ApiClient from '../ApiClient';
import BankAccountDescriptor from './BankAccountDescriptor';

/**
 * The PaymentTransactionsInstructions model module.
 * @module model/PaymentTransactionsInstructions
 */
export default class PaymentTransactionsInstructions {
    /**
     * Constructs a new <code>PaymentTransactionsInstructions</code>.
     * @alias module:model/PaymentTransactionsInstructions
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentTransactionsInstructions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsInstructions} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsInstructions} The populated <code>PaymentTransactionsInstructions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsInstructions();
            
            
            
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = BankAccountDescriptor.constructFromObject(data['payment']);
            }
        }
        return obj;
    }

    /**
     * Language
     * @member {String} lang
     */
    lang = undefined;

    /**
     * Amount
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Currency
     * @member {String} currency
     */
    currency = undefined;

    /**
     * Payment data
     * @member {module:model/BankAccountDescriptor} payment
     */
    payment = undefined;

}
