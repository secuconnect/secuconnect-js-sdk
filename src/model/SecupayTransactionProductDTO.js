
import ApiClient from '../ApiClient';
import PaymentCustomersProductModel from './PaymentCustomersProductModel';
import SecupayBasketItem from './SecupayBasketItem';
import SecupayRedirectUrl from './SecupayRedirectUrl';
import SecupayTransactionProductDTOExperience from './SecupayTransactionProductDTOExperience';
import SecupayTransactionProductDTOOptData from './SecupayTransactionProductDTOOptData';
import SecupayTransactionProductDTOSubscription from './SecupayTransactionProductDTOSubscription';

/**
 * The SecupayTransactionProductDTO model module.
 * @module model/SecupayTransactionProductDTO
 */
export default class SecupayTransactionProductDTO {
    /**
     * Constructs a new <code>SecupayTransactionProductDTO</code>.
     * @alias module:model/SecupayTransactionProductDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTO} The populated <code>SecupayTransactionProductDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductDTO();
            
            
            
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
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = ApiClient.convertToType(data['basket'], [SecupayBasketItem]);
            }
            if (data.hasOwnProperty('accrual')) {
                obj['accrual'] = ApiClient.convertToType(data['accrual'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_action')) {
                obj['payment_action'] = ApiClient.convertToType(data['payment_action'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = SecupayRedirectUrl.constructFromObject(data['redirect_url']);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('opt_data')) {
                obj['opt_data'] = SecupayTransactionProductDTOOptData.constructFromObject(data['opt_data']);
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = SecupayTransactionProductDTOSubscription.constructFromObject(data['subscription']);
            }
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'Boolean');
            }
            if (data.hasOwnProperty('experience')) {
                obj['experience'] = SecupayTransactionProductDTOExperience.constructFromObject(data['experience']);
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
     * A list of items that are being purchased.
     * @member {Array.<module:model/SecupayBasketItem>} basket
     */
    basket = undefined;

    /**
     * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
     * @member {Boolean} accrual
     */
    accrual = undefined;

    /**
     * Specifies whether a pre-authorization (\"authorization\") or instant payment (\"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
     * @member {String} payment_action
     */
    payment_action = undefined;

    /**
     * The customer object
     * @member {module:model/PaymentCustomersProductModel} customer
     */
    customer = undefined;

    /**
     * A list of redirect urls used for the payment checkout page
     * @member {module:model/SecupayRedirectUrl} redirect_url
     */
    redirect_url = undefined;

    /**
     * Contract id
     * @member {String} contract
     */
    contract = undefined;

    /**
     * Container id
     * @member {String} container
     */
    container = undefined;

    /**
     * @member {module:model/SecupayTransactionProductDTOOptData} opt_data
     */
    opt_data = undefined;

    /**
     * @member {module:model/SecupayTransactionProductDTOSubscription} subscription
     */
    subscription = undefined;

    /**
     * Demo
     * @member {Boolean} demo
     */
    demo = undefined;

    /**
     * @member {module:model/SecupayTransactionProductDTOExperience} experience
     */
    experience = undefined;

}
