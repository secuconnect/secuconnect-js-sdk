
import ApiClient from '../ApiClient';
import PaymentContainersProductModel from './PaymentContainersProductModel';
import PaymentCustomersProductModel from './PaymentCustomersProductModel';
import SecupayBasketItem from './SecupayBasketItem';
import SecupayTransactionProductModelRedirectUrl from './SecupayTransactionProductModelRedirectUrl';
import SecupayTransactionProductModelTransferAccount from './SecupayTransactionProductModelTransferAccount';
import SecupayTransactionProductModelUsedPaymentInstrument from './SecupayTransactionProductModelUsedPaymentInstrument';





/**
* The SecupayTransactionProductModel model module.
* @module model/SecupayTransactionProductModel
*/
export default class SecupayTransactionProductModel {
    /**
    * Constructs a new <code>SecupayTransactionProductModel</code>.
    * @alias module:model/SecupayTransactionProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModel} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModel} The populated <code>SecupayTransactionProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductModel();

            
            
            

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
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = ApiClient.convertToType(data['basket'], [SecupayBasketItem]);
            }
            if (data.hasOwnProperty('transaction_status')) {
                obj['transaction_status'] = ApiClient.convertToType(data['transaction_status'], 'String');
            }
            if (data.hasOwnProperty('accrual')) {
                obj['accrual'] = ApiClient.convertToType(data['accrual'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_action')) {
                obj['payment_action'] = ApiClient.convertToType(data['payment_action'], 'String');
            }
            if (data.hasOwnProperty('transfer_purpose')) {
                obj['transfer_purpose'] = ApiClient.convertToType(data['transfer_purpose'], 'String');
            }
            if (data.hasOwnProperty('transfer_account')) {
                obj['transfer_account'] = SecupayTransactionProductModelTransferAccount.constructFromObject(data['transfer_account']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('used_payment_instrument')) {
                obj['used_payment_instrument'] = SecupayTransactionProductModelUsedPaymentInstrument.constructFromObject(data['used_payment_instrument']);
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = SecupayTransactionProductModelRedirectUrl.constructFromObject(data['redirect_url']);
            }
            if (data.hasOwnProperty('iframe_url')) {
                obj['iframe_url'] = ApiClient.convertToType(data['iframe_url'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = PaymentContainersProductModel.constructFromObject(data['container']);
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
    * Transaction identifier
    * @member {Number} trans_id
    */
    trans_id = undefined;
    /**
    * Transaction status
    * @member {String} status
    */
    status = undefined;
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
    * Transaction status (number)
    * @member {String} transaction_status
    */
    transaction_status = undefined;
    /**
    * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE). Standard value here is FALSE.
    * @member {Boolean} accrual
    */
    accrual = undefined;
    /**
    * Specifies whether a pre-authorization (\"authorization\") or instant payment ( \"sale\") is to be performed. Standard value here is \"sale\". The collection of the pre-authorized payment is made with the \"capture\" command.
    * @member {String} payment_action
    */
    payment_action = undefined;
    /**
    * The purpose the payer needs to use for his transfer
    * @member {String} transfer_purpose
    */
    transfer_purpose = undefined;
    /**
    * @member {module:model/SecupayTransactionProductModelTransferAccount} transfer_account
    */
    transfer_account = undefined;
    /**
    * The customer object
    * @member {module:model/PaymentCustomersProductModel} customer
    */
    customer = undefined;
    /**
    * @member {module:model/SecupayTransactionProductModelUsedPaymentInstrument} used_payment_instrument
    */
    used_payment_instrument = undefined;
    /**
    * @member {module:model/SecupayTransactionProductModelRedirectUrl} redirect_url
    */
    redirect_url = undefined;
    /**
    * The url of the payment checkout iframe
    * @member {String} iframe_url
    */
    iframe_url = undefined;
    /**
    * The container object
    * @member {module:model/PaymentContainersProductModel} container
    */
    container = undefined;








}


