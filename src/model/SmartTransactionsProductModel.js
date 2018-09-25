
import ApiClient from '../ApiClient';
import LoyaltyCustomersProductModel from './LoyaltyCustomersProductModel';
import ProductInstanceUID from './ProductInstanceUID';
import SmartTransactionsBasket from './SmartTransactionsBasket';
import SmartTransactionsBasketInfo from './SmartTransactionsBasketInfo';
import SmartTransactionsCheckin from './SmartTransactionsCheckin';
import SmartTransactionsIdent from './SmartTransactionsIdent';
import SmartTransactionsMerchant from './SmartTransactionsMerchant';
import SmartTransactionsPickupOptions from './SmartTransactionsPickupOptions';
import SmartTransactionsReceipt from './SmartTransactionsReceipt';





/**
* The SmartTransactionsProductModel model module.
* @module model/SmartTransactionsProductModel
*/
export default class SmartTransactionsProductModel {
    /**
    * Constructs a new <code>SmartTransactionsProductModel</code>.
    * @alias module:model/SmartTransactionsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsProductModel} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsProductModel} The populated <code>SmartTransactionsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = SmartTransactionsMerchant.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ProductInstanceUID.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('marketplace_contract')) {
                obj['marketplace_contract'] = ProductInstanceUID.constructFromObject(data['marketplace_contract']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = LoyaltyCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('checkin')) {
                obj['checkin'] = SmartTransactionsCheckin.constructFromObject(data['checkin']);
            }
            if (data.hasOwnProperty('merchantRef')) {
                obj['merchantRef'] = ApiClient.convertToType(data['merchantRef'], 'String');
            }
            if (data.hasOwnProperty('transactionRef')) {
                obj['transactionRef'] = ApiClient.convertToType(data['transactionRef'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ProductInstanceUID.constructFromObject(data['store']);
            }
            if (data.hasOwnProperty('device_source')) {
                obj['device_source'] = ProductInstanceUID.constructFromObject(data['device_source']);
            }
            if (data.hasOwnProperty('device_destination')) {
                obj['device_destination'] = ProductInstanceUID.constructFromObject(data['device_destination']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('receipt_number')) {
                obj['receipt_number'] = ApiClient.convertToType(data['receipt_number'], 'Number');
            }
            if (data.hasOwnProperty('receipt')) {
                obj['receipt'] = ApiClient.convertToType(data['receipt'], [SmartTransactionsReceipt]);
            }
            if (data.hasOwnProperty('receipt_merchant')) {
                obj['receipt_merchant'] = ApiClient.convertToType(data['receipt_merchant'], 'String');
            }
            if (data.hasOwnProperty('receipt_merchant_print')) {
                obj['receipt_merchant_print'] = ApiClient.convertToType(data['receipt_merchant_print'], 'Boolean');
            }
            if (data.hasOwnProperty('basket_info')) {
                obj['basket_info'] = SmartTransactionsBasketInfo.constructFromObject(data['basket_info']);
            }
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = SmartTransactionsBasket.constructFromObject(data['basket']);
            }
            if (data.hasOwnProperty('idents')) {
                obj['idents'] = ApiClient.convertToType(data['idents'], [SmartTransactionsIdent]);
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('cashier')) {
                obj['cashier'] = ApiClient.convertToType(data['cashier'], 'String');
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = ApiClient.convertToType(data['market'], 'String');
            }
            if (data.hasOwnProperty('order_option')) {
                obj['order_option'] = ApiClient.convertToType(data['order_option'], 'String');
            }
            if (data.hasOwnProperty('pickup_options')) {
                obj['pickup_options'] = SmartTransactionsPickupOptions.constructFromObject(data['pickup_options']);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('trans_id')) {
                obj['trans_id'] = ApiClient.convertToType(data['trans_id'], 'Number');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ProductInstanceUID.constructFromObject(data['transactions']);
            }
            if (data.hasOwnProperty('last_visited_page')) {
                obj['last_visited_page'] = ApiClient.convertToType(data['last_visited_page'], 'String');
            }
        }
        return obj;
    }

    /**
    * Object of smart transaction
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of smart transaction
    * @member {String} id
    */
    id = undefined;
    /**
    * Status of smart transaction
    * @member {String} status
    */
    status = undefined;
    /**
    * Merchant
    * @member {module:model/SmartTransactionsMerchant} merchant
    */
    merchant = undefined;
    /**
    * Contract
    * @member {module:model/ProductInstanceUID} contract
    */
    contract = undefined;
    /**
    * Marketplace contract
    * @member {module:model/ProductInstanceUID} marketplace_contract
    */
    marketplace_contract = undefined;
    /**
    * Customer
    * @member {module:model/LoyaltyCustomersProductModel} customer
    */
    customer = undefined;
    /**
    * Check in
    * @member {module:model/SmartTransactionsCheckin} checkin
    */
    checkin = undefined;
    /**
    * Merchant ref
    * @member {String} merchantRef
    */
    merchantRef = undefined;
    /**
    * Transaction ref
    * @member {String} transactionRef
    */
    transactionRef = undefined;
    /**
    * Store
    * @member {module:model/ProductInstanceUID} store
    */
    store = undefined;
    /**
    * Device source
    * @member {module:model/ProductInstanceUID} device_source
    */
    device_source = undefined;
    /**
    * Device destination
    * @member {module:model/ProductInstanceUID} device_destination
    */
    device_destination = undefined;
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
    * Receipt number
    * @member {Number} receipt_number
    */
    receipt_number = undefined;
    /**
    * Receipt
    * @member {Array.<module:model/SmartTransactionsReceipt>} receipt
    */
    receipt = undefined;
    /**
    * Receipt merchant
    * @member {String} receipt_merchant
    */
    receipt_merchant = undefined;
    /**
    * Receipt merchant print
    * @member {Boolean} receipt_merchant_print
    */
    receipt_merchant_print = undefined;
    /**
    * Basket info
    * @member {module:model/SmartTransactionsBasketInfo} basket_info
    */
    basket_info = undefined;
    /**
    * Basket
    * @member {module:model/SmartTransactionsBasket} basket
    */
    basket = undefined;
    /**
    * Idents
    * @member {Array.<module:model/SmartTransactionsIdent>} idents
    */
    idents = undefined;
    /**
    * Tax rate
    * @member {Number} tax_rate
    */
    tax_rate = undefined;
    /**
    * Tax amount
    * @member {Number} tax_amount
    */
    tax_amount = undefined;
    /**
    * Cashier
    * @member {String} cashier
    */
    cashier = undefined;
    /**
    * Market
    * @member {String} market
    */
    market = undefined;
    /**
    * Order option
    * @member {String} order_option
    */
    order_option = undefined;
    /**
    * Pickup options
    * @member {module:model/SmartTransactionsPickupOptions} pickup_options
    */
    pickup_options = undefined;
    /**
    * Product
    * @member {String} product
    */
    product = undefined;
    /**
    * Transaction id
    * @member {Number} trans_id
    */
    trans_id = undefined;
    /**
    * Payment method
    * @member {String} payment_method
    */
    payment_method = undefined;
    /**
    * Transactions
    * @member {module:model/ProductInstanceUID} transactions
    */
    transactions = undefined;
    /**
    * Last visited page
    * @member {String} last_visited_page
    */
    last_visited_page = undefined;








}


