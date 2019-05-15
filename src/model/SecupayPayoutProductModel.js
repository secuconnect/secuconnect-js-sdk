
import ApiClient from '../ApiClient';
import PaymentInformation from './PaymentInformation';
import SecupayTransactionListItem from './SecupayTransactionListItem';

/**
 * The SecupayPayoutProductModel model module.
 * @module model/SecupayPayoutProductModel
 */
export default class SecupayPayoutProductModel {
    /**
     * Constructs a new <code>SecupayPayoutProductModel</code>.
     * @alias module:model/SecupayPayoutProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayPayoutProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayPayoutProductModel} obj Optional instance to populate.
    * @return {module:model/SecupayPayoutProductModel} The populated <code>SecupayPayoutProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayPayoutProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('trans_id')) {
                obj['trans_id'] = ApiClient.convertToType(data['trans_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('transaction_status')) {
                obj['transaction_status'] = ApiClient.convertToType(data['transaction_status'], 'String');
            }
            if (data.hasOwnProperty('transaction_list')) {
                obj['transaction_list'] = ApiClient.convertToType(data['transaction_list'], [SecupayTransactionListItem]);
            }
            if (data.hasOwnProperty('transfer_purpose')) {
                obj['transfer_purpose'] = ApiClient.convertToType(data['transfer_purpose'], 'String');
            }
            if (data.hasOwnProperty('transfer_account')) {
                obj['transfer_account'] = PaymentInformation.constructFromObject(data['transfer_account']);
            }
        }
        return obj;
    }

    /**
     * Product name
     * @member {String} object
     */
    object = undefined;

    /**
     * ID of instance
     * @member {String} id
     */
    id = undefined;

    /**
     * ID of transaction
     * @member {Number} trans_id
     */
    trans_id = undefined;

    /**
     * Transaction status
     * @member {String} status
     */
    status = undefined;

    /**
     * Total amount of transaction lit's items
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * ISO 4217 code of currency, eg EUR for Euro.
     * @member {String} currency
     */
    currency = undefined;

    /**
     * The purpose of the payment. This is the later assignment of the payment is for example on the account statement of the buyer.
     * @member {String} purpose
     */
    purpose = undefined;

    /**
     * Specifying an order number. Depending on the contract setting, this must be unique for each payment.
     * @member {String} order_id
     */
    order_id = undefined;

    /**
     * Transaction status (number)
     * @member {String} transaction_status
     */
    transaction_status = undefined;

    /**
     * A list of transaction items
     * @member {Array.<module:model/SecupayTransactionListItem>} transaction_list
     */
    transaction_list = undefined;

    /**
     * The purpose the payer needs to use for his transfer
     * @member {String} transfer_purpose
     */
    transfer_purpose = undefined;

    /**
     * The bank account the payer needs to use for his transfer
     * @member {module:model/PaymentInformation} transfer_account
     */
    transfer_account = undefined;

}
