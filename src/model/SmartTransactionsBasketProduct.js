
import ApiClient from '../ApiClient';
import SmartTransactionsBasketProductGroup from './SmartTransactionsBasketProductGroup';
import SmartTransactionsSubBasketProduct from './SmartTransactionsSubBasketProduct';

/**
 * The SmartTransactionsBasketProduct model module.
 * @module model/SmartTransactionsBasketProduct
 */
export default class SmartTransactionsBasketProduct {
    /**
     * Constructs a new <code>SmartTransactionsBasketProduct</code>.
     * @alias module:model/SmartTransactionsBasketProduct
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsBasketProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketProduct} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketProduct} The populated <code>SmartTransactionsBasketProduct</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBasketProduct();
            
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('articleNumber')) {
                obj['articleNumber'] = ApiClient.convertToType(data['articleNumber'], 'String');
            }
            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('priceOne')) {
                obj['priceOne'] = ApiClient.convertToType(data['priceOne'], 'Number');
            }
            if (data.hasOwnProperty('sum')) {
                obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('reference_id')) {
                obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
            }
            if (data.hasOwnProperty('contract_id')) {
                obj['contract_id'] = ApiClient.convertToType(data['contract_id'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], [SmartTransactionsBasketProductGroup]);
            }
            if (data.hasOwnProperty('sub_basket')) {
                obj['sub_basket'] = ApiClient.convertToType(data['sub_basket'], [SmartTransactionsSubBasketProduct]);
            }
        }
        return obj;
    }

    /**
     * Product id
     * @member {Number} id
     */
    id = undefined;

    /**
     * Parent
     * @member {Number} parent
     */
    parent = undefined;

    /**
     * Category of item
     * @member {String} item_type
     */
    item_type = undefined;

    /**
     * Desc
     * @member {String} desc
     */
    desc = undefined;

    /**
     * Article number
     * @member {String} articleNumber
     */
    articleNumber = undefined;

    /**
     * The serialnumber of the scanned posa card
     * @member {String} serialNumber
     */
    serialNumber = undefined;

    /**
     * international article number
     * @member {String} ean
     */
    ean = undefined;

    /**
     * Quantity
     * @member {Number} quantity
     */
    quantity = undefined;

    /**
     * Price one
     * @member {Number} priceOne
     */
    priceOne = undefined;

    /**
     * it is the value of the sum of the product with all items in sub_basket
     * @member {Number} sum
     */
    sum = undefined;

    /**
     * Tax
     * @member {Number} tax
     */
    tax = undefined;

    /**
     * The reference_id must be unique, it's a Reference for to the reference_id of SmartTransactionsSubBasketProduct [example: SmartTransactionsBasketProduct->reference_id is 1000 then all SmartTransactionsSubBasketProduct must have unique reference_id like 1000.1, 1000.2 etc.]
     * @member {String} reference_id
     */
    reference_id = undefined;

    /**
     * contract id
     * @member {String} contract_id
     */
    contract_id = undefined;

    /**
     * Group
     * @member {Array.<module:model/SmartTransactionsBasketProductGroup>} group
     */
    group = undefined;

    /**
     * sub basket Product
     * @member {Array.<module:model/SmartTransactionsSubBasketProduct>} sub_basket
     */
    sub_basket = undefined;

}
