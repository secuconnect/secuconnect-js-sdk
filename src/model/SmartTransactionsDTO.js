
import ApiClient from '../ApiClient';
import ProductInstanceID from './ProductInstanceID';
import SmartTransactionsBasket from './SmartTransactionsBasket';
import SmartTransactionsBasketInfo from './SmartTransactionsBasketInfo';
import SmartTransactionsIdent from './SmartTransactionsIdent';
import SmartTransactionsPickupOptions from './SmartTransactionsPickupOptions';





/**
* The SmartTransactionsDTO model module.
* @module model/SmartTransactionsDTO
* @version 2.0.0
*/
export default class SmartTransactionsDTO {
    /**
    * Constructs a new <code>SmartTransactionsDTO</code>.
    * @alias module:model/SmartTransactionsDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsDTO} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsDTO} The populated <code>SmartTransactionsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsDTO();

            
            
            

            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('marketplace_contract')) {
                obj['marketplace_contract'] = ProductInstanceID.constructFromObject(data['marketplace_contract']);
            }
            if (data.hasOwnProperty('order_option')) {
                obj['order_option'] = ApiClient.convertToType(data['order_option'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('transactionRef')) {
                obj['transactionRef'] = ApiClient.convertToType(data['transactionRef'], 'String');
            }
            if (data.hasOwnProperty('merchantRef')) {
                obj['merchantRef'] = ApiClient.convertToType(data['merchantRef'], 'String');
            }
            if (data.hasOwnProperty('basket')) {
                obj['basket'] = SmartTransactionsBasket.constructFromObject(data['basket']);
            }
            if (data.hasOwnProperty('basket_info')) {
                obj['basket_info'] = SmartTransactionsBasketInfo.constructFromObject(data['basket_info']);
            }
            if (data.hasOwnProperty('idents')) {
                obj['idents'] = ApiClient.convertToType(data['idents'], [SmartTransactionsIdent]);
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = ApiClient.convertToType(data['market'], 'String');
            }
            if (data.hasOwnProperty('cashier')) {
                obj['cashier'] = ApiClient.convertToType(data['cashier'], 'String');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('receipt')) {
                obj['receipt'] = ApiClient.convertToType(data['receipt'], 'String');
            }
            if (data.hasOwnProperty('receipt_number')) {
                obj['receipt_number'] = ApiClient.convertToType(data['receipt_number'], 'Number');
            }
            if (data.hasOwnProperty('device_source')) {
                obj['device_source'] = ApiClient.convertToType(data['device_source'], 'String');
            }
            if (data.hasOwnProperty('trans_id')) {
                obj['trans_id'] = ApiClient.convertToType(data['trans_id'], 'Number');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ProductInstanceID.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('pickup_options')) {
                obj['pickup_options'] = SmartTransactionsPickupOptions.constructFromObject(data['pickup_options']);
            }
            if (data.hasOwnProperty('last_visited_page')) {
                obj['last_visited_page'] = ApiClient.convertToType(data['last_visited_page'], 'String');
            }
        }
        return obj;
    }

    /**
    * Merchant
    * @member {String} merchant
    */
    merchant = undefined;
    /**
    * Marketplace contract
    * @member {module:model/ProductInstanceID} marketplace_contract
    */
    marketplace_contract = undefined;
    /**
    * Order option
    * @member {String} order_option
    */
    order_option = undefined;
    /**
    * Status
    * @member {String} status
    */
    status = undefined;
    /**
    * Transaction ref
    * @member {String} transactionRef
    */
    transactionRef = undefined;
    /**
    * Merchant ref
    * @member {String} merchantRef
    */
    merchantRef = undefined;
    /**
    * Basket
    * @member {module:model/SmartTransactionsBasket} basket
    */
    basket = undefined;
    /**
    * Basket info
    * @member {module:model/SmartTransactionsBasketInfo} basket_info
    */
    basket_info = undefined;
    /**
    * Idents
    * @member {Array.<module:model/SmartTransactionsIdent>} idents
    */
    idents = undefined;
    /**
    * Tax amount
    * @member {Number} tax_amount
    */
    tax_amount = undefined;
    /**
    * Tax rate
    * @member {Number} tax_rate
    */
    tax_rate = undefined;
    /**
    * Market
    * @member {String} market
    */
    market = undefined;
    /**
    * Cashier
    * @member {String} cashier
    */
    cashier = undefined;
    /**
    * Product
    * @member {String} product
    */
    product = undefined;
    /**
    * Receipt
    * @member {String} receipt
    */
    receipt = undefined;
    /**
    * Receipt number
    * @member {Number} receipt_number
    */
    receipt_number = undefined;
    /**
    * Device source
    * @member {String} device_source
    */
    device_source = undefined;
    /**
    * Transaction id
    * @member {Number} trans_id
    */
    trans_id = undefined;
    /**
    * Contract
    * @member {module:model/ProductInstanceID} contract
    */
    contract = undefined;
    /**
    * Pickup options
    * @member {module:model/SmartTransactionsPickupOptions} pickup_options
    */
    pickup_options = undefined;
    /**
    * Last visited page
    * @member {String} last_visited_page
    */
    last_visited_page = undefined;








}


