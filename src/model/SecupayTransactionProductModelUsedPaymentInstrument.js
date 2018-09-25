
import ApiClient from '../ApiClient';
import BankAccountDescriptor from './BankAccountDescriptor';





/**
* The SecupayTransactionProductModelUsedPaymentInstrument model module.
* @module model/SecupayTransactionProductModelUsedPaymentInstrument
*/
export default class SecupayTransactionProductModelUsedPaymentInstrument {
    /**
    * Constructs a new <code>SecupayTransactionProductModelUsedPaymentInstrument</code>.
    * The payment data which has the payer used (like bank account, credit card, ...). This data is always masked.
    * @alias module:model/SecupayTransactionProductModelUsedPaymentInstrument
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductModelUsedPaymentInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModelUsedPaymentInstrument} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModelUsedPaymentInstrument} The populated <code>SecupayTransactionProductModelUsedPaymentInstrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductModelUsedPaymentInstrument();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = BankAccountDescriptor.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
    * The type of the payment instrument data, like: 'bank_account' or 'credit_card'
    * @member {String} type
    */
    type = undefined;
    /**
    * Holds the payment instrument data
    * @member {module:model/BankAccountDescriptor} data
    */
    data = undefined;








}


