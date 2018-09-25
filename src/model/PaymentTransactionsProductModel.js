
import ApiClient from '../ApiClient';
import PaymentTransactionsProductModelCustomer from './PaymentTransactionsProductModelCustomer';
import PaymentTransactionsProductModelDetails from './PaymentTransactionsProductModelDetails';
import PaymentTransactionsProductModelMerchant from './PaymentTransactionsProductModelMerchant';





/**
* The PaymentTransactionsProductModel model module.
* @module model/PaymentTransactionsProductModel
* @version 2.0.0
*/
export default class PaymentTransactionsProductModel {
    /**
    * Constructs a new <code>PaymentTransactionsProductModel</code>.
    * @alias module:model/PaymentTransactionsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModel} The populated <code>PaymentTransactionsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = PaymentTransactionsProductModelMerchant.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('trans_id')) {
                obj['trans_id'] = ApiClient.convertToType(data['trans_id'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('product_raw')) {
                obj['product_raw'] = ApiClient.convertToType(data['product_raw'], 'String');
            }
            if (data.hasOwnProperty('zahlungsmittel_id')) {
                obj['zahlungsmittel_id'] = ApiClient.convertToType(data['zahlungsmittel_id'], 'Number');
            }
            if (data.hasOwnProperty('contract_id')) {
                obj['contract_id'] = ApiClient.convertToType(data['contract_id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('status_text')) {
                obj['status_text'] = ApiClient.convertToType(data['status_text'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = PaymentTransactionsProductModelDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentTransactionsProductModelCustomer.constructFromObject(data['customer']);
            }
        }
        return obj;
    }

    /**
    * Object of payment transaction
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of payment transaction
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {module:model/PaymentTransactionsProductModelMerchant} merchant
    */
    merchant = undefined;
    /**
    * Transaction identifier
    * @member {Number} trans_id
    */
    trans_id = undefined;
    /**
    * Product identifier
    * @member {Number} product_id
    */
    product_id = undefined;
    /**
    * Product type
    * @member {String} product
    */
    product = undefined;
    /**
    * the name of the payment product
    * @member {String} product_raw
    */
    product_raw = undefined;
    /**
    * The internal id of the stored payment instrument.
    * @member {Number} zahlungsmittel_id
    */
    zahlungsmittel_id = undefined;
    /**
    * Contract identifier
    * @member {Number} contract_id
    */
    contract_id = undefined;
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
    * Created at date
    * @member {Date} created
    */
    created = undefined;
    /**
    * Updated at date
    * @member {Date} updated
    */
    updated = undefined;
    /**
    * WTF??
    * @member {Number} status
    */
    status = undefined;
    /**
    * Transaction status
    * @member {String} status_text
    */
    status_text = undefined;
    /**
    * @member {module:model/PaymentTransactionsProductModelDetails} details
    */
    details = undefined;
    /**
    * @member {module:model/PaymentTransactionsProductModelCustomer} customer
    */
    customer = undefined;








}


