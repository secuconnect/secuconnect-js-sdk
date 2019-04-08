
import ApiClient from '../ApiClient';

/**
 * The PaymentTransactionCancelDTO model module.
 * @module model/PaymentTransactionCancelDTO
 */
export default class PaymentTransactionCancelDTO {
    /**
     * Constructs a new <code>PaymentTransactionCancelDTO</code>.
     * @alias module:model/PaymentTransactionCancelDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentTransactionCancelDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionCancelDTO} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionCancelDTO} The populated <code>PaymentTransactionCancelDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionCancelDTO();
            
            
            
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('reduce_stakeholder_payment')) {
                obj['reduce_stakeholder_payment'] = ApiClient.convertToType(data['reduce_stakeholder_payment'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * The reason of this cancel or refund
     * @member {String} reason
     */
    reason = undefined;

    /**
     * partial or full refund amount, \"0\" means full refund
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Mixed-Basket: (percentage) reduce the stakeholder amount too
     * @member {Boolean} reduce_stakeholder_payment
     * @default false
     */
    reduce_stakeholder_payment = false;

}
