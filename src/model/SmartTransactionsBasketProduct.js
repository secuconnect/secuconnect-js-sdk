
import ApiClient from '../ApiClient';
import SmartTransactionsBasketProductGroup from './SmartTransactionsBasketProductGroup';





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
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('articleNumber')) {
                obj['articleNumber'] = ApiClient.convertToType(data['articleNumber'], 'String');
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
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], [SmartTransactionsBasketProductGroup]);
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
    * Ean
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
    * Tax
    * @member {Number} tax
    */
    tax = undefined;
    /**
    * Group
    * @member {Array.<module:model/SmartTransactionsBasketProductGroup>} group
    */
    group = undefined;








}


