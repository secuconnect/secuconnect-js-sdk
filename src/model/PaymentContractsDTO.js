
import ApiClient from '../ApiClient';





/**
* The PaymentContractsDTO model module.
* @module model/PaymentContractsDTO
*/
export default class PaymentContractsDTO {
    /**
    * Constructs a new <code>PaymentContractsDTO</code>.
    * @alias module:model/PaymentContractsDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTO} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTO} The populated <code>PaymentContractsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsDTO();

            
            
            

            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('internal_reference')) {
                obj['internal_reference'] = ApiClient.convertToType(data['internal_reference'], 'String');
            }
            if (data.hasOwnProperty('contract_id')) {
                obj['contract_id'] = ApiClient.convertToType(data['contract_id'], 'String');
            }
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'String');
            }
            if (data.hasOwnProperty('debit_product_id')) {
                obj['debit_product_id'] = ApiClient.convertToType(data['debit_product_id'], 'String');
            }
            if (data.hasOwnProperty('prepay_product_id')) {
                obj['prepay_product_id'] = ApiClient.convertToType(data['prepay_product_id'], 'String');
            }
            if (data.hasOwnProperty('invoice_product_id')) {
                obj['invoice_product_id'] = ApiClient.convertToType(data['invoice_product_id'], 'String');
            }
            if (data.hasOwnProperty('creditcard_product_id')) {
                obj['creditcard_product_id'] = ApiClient.convertToType(data['creditcard_product_id'], 'String');
            }
            if (data.hasOwnProperty('url_push')) {
                obj['url_push'] = ApiClient.convertToType(data['url_push'], 'String');
            }
            if (data.hasOwnProperty('allow_transactions')) {
                obj['allow_transactions'] = ApiClient.convertToType(data['allow_transactions'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_cloning')) {
                obj['allow_cloning'] = ApiClient.convertToType(data['allow_cloning'], 'Boolean');
            }
            if (data.hasOwnProperty('unique_order_id')) {
                obj['unique_order_id'] = ApiClient.convertToType(data['unique_order_id'], 'Boolean');
            }
            if (data.hasOwnProperty('scoring')) {
                obj['scoring'] = ApiClient.convertToType(data['scoring'], 'Boolean');
            }
            if (data.hasOwnProperty('sepa_mandate_inform')) {
                obj['sepa_mandate_inform'] = ApiClient.convertToType(data['sepa_mandate_inform'], 'String');
            }
        }
        return obj;
    }

    /**
    * Contracts Merchant
    * @member {String} merchant
    */
    merchant = undefined;
    /**
    * The internal user id
    * @member {String} internal_reference
    */
    internal_reference = undefined;
    /**
    * Contracts id
    * @member {String} contract_id
    */
    contract_id = undefined;
    /**
    * Is this a demo contract
    * @member {String} demo
    */
    demo = undefined;
    /**
    * Contract debit product id
    * @member {String} debit_product_id
    */
    debit_product_id = undefined;
    /**
    * Contracts prepay product id
    * @member {String} prepay_product_id
    */
    prepay_product_id = undefined;
    /**
    * Contracts invoice product id
    * @member {String} invoice_product_id
    */
    invoice_product_id = undefined;
    /**
    * Contracts credit card product id
    * @member {String} creditcard_product_id
    */
    creditcard_product_id = undefined;
    /**
    * An URL where your service listen for push notifications of the secuconnect service
    * @member {String} url_push
    */
    url_push = undefined;
    /**
    * Should allow transactions?
    * @member {Boolean} allow_transactions
    */
    allow_transactions = undefined;
    /**
    * Should allow cloning?
    * @member {Boolean} allow_cloning
    */
    allow_cloning = undefined;
    /**
    * Bool, default FALSE. If TRUE, an error message will be thrown if you try to create a new payment transaction with the same order_id of an previous transaction.
    * @member {Boolean} unique_order_id
    */
    unique_order_id = undefined;
    /**
    * Bool, default TRUE. If FALSE, the customer scoring is disabled for your payment contract
    * @member {Boolean} scoring
    */
    scoring = undefined;
    /**
    * Enum [on_transaction, on_container, never], default “never” Option to send automatically an information to the customer when a new SEPA-mandate was created.
    * @member {String} sepa_mandate_inform
    */
    sepa_mandate_inform = undefined;








}


