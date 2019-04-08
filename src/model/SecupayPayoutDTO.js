
import ApiClient from '../ApiClient';
import PaymentCustomersProductModel from './PaymentCustomersProductModel';
import SecupayPayoutDTOOptData from './SecupayPayoutDTOOptData';
import SecupayRedirectUrl from './SecupayRedirectUrl';
import SecupayTransactionListItem from './SecupayTransactionListItem';

/**
 * The SecupayPayoutDTO model module.
 * @module model/SecupayPayoutDTO
 */
export default class SecupayPayoutDTO {
    /**
     * Constructs a new <code>SecupayPayoutDTO</code>.
     * @alias module:model/SecupayPayoutDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayPayoutDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayPayoutDTO} obj Optional instance to populate.
    * @return {module:model/SecupayPayoutDTO} The populated <code>SecupayPayoutDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayPayoutDTO();
            
            
            
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'Number');
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = SecupayRedirectUrl.constructFromObject(data['redirect_url']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('opt_data')) {
                obj['opt_data'] = SecupayPayoutDTOOptData.constructFromObject(data['opt_data']);
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
            if (data.hasOwnProperty('transaction_list')) {
                obj['transaction_list'] = ApiClient.convertToType(data['transaction_list'], [SecupayTransactionListItem]);
            }
        }
        return obj;
    }

    /**
     * demo env value
     * @member {Number} demo
     */
    demo = undefined;

    /**
     * A list of redirect urls used for the payment checkout page
     * @member {module:model/SecupayRedirectUrl} redirect_url
     */
    redirect_url = undefined;

    /**
     * The customer object
     * @member {module:model/PaymentCustomersProductModel} customer
     */
    customer = undefined;

    /**
     * @member {module:model/SecupayPayoutDTOOptData} opt_data
     */
    opt_data = undefined;

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
     * A list of transaction items
     * @member {Array.<module:model/SecupayTransactionListItem>} transaction_list
     */
    transaction_list = undefined;

}
