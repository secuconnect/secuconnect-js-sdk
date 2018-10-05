
import ApiClient from '../ApiClient';





/**
* The SecupayBasketItem model module.
* @module model/SecupayBasketItem
*/
export default class SecupayBasketItem {
    /**
    * Constructs a new <code>SecupayBasketItem</code>.
    * Item describing single position in basket in transaction
    * @alias module:model/SecupayBasketItem
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayBasketItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayBasketItem} obj Optional instance to populate.
    * @return {module:model/SecupayBasketItem} The populated <code>SecupayBasketItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayBasketItem();

            
            
            

            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
            if (data.hasOwnProperty('article_number')) {
                obj['article_number'] = ApiClient.convertToType(data['article_number'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('transaction_hash')) {
                obj['transaction_hash'] = ApiClient.convertToType(data['transaction_hash'], 'String');
            }
            if (data.hasOwnProperty('contract_id')) {
                obj['contract_id'] = ApiClient.convertToType(data['contract_id'], 'String');
            }
            if (data.hasOwnProperty('reference_id')) {
                obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
            }
            if (data.hasOwnProperty('sub_basket')) {
                obj['sub_basket'] = ApiClient.convertToType(data['sub_basket'], [SecupayBasketItem]);
            }
        }
        return obj;
    }

    /**
    * Category of item
    * @member {String} item_type
    * @default 'article'
    */
    item_type = 'article';
    /**
    * Article number of item
    * @member {String} article_number
    */
    article_number = undefined;
    /**
    * Quantity of articles in item
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * Descriptive name of item
    * @member {String} name
    */
    name = undefined;
    /**
    * Model of item
    * @member {String} model
    */
    model = undefined;
    /**
    * EAN, European Article Number
    * @member {String} ean
    */
    ean = undefined;
    /**
    * Applicable tax in percentages
    * @member {String} tax
    */
    tax = undefined;
    /**
    * Total price
    * @member {Number} total
    */
    total = undefined;
    /**
    * Price of single article, if item is of article category
    * @member {Number} price
    */
    price = undefined;
    /**
    * Special param for stakeholder payments
    * @member {String} apikey
    */
    apikey = undefined;
    /**
    * Special param for payout payments
    * @member {String} transaction_hash
    */
    transaction_hash = undefined;
    /**
    * Contract id - Special param for stakeholder payments
    * @member {String} contract_id
    */
    contract_id = undefined;
    /**
    * Reference id - must be unique for the entire basket
    * @member {String} reference_id
    */
    reference_id = undefined;
    /**
    * Mixed-Basket: All basket items for one merchant.
    * @member {Array.<module:model/SecupayBasketItem>} sub_basket
    */
    sub_basket = undefined;








}


