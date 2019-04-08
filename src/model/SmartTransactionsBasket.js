
import ApiClient from '../ApiClient';
import SmartTransactionsBasketProduct from './SmartTransactionsBasketProduct';
import SmartTransactionsBasketText from './SmartTransactionsBasketText';

/**
 * The SmartTransactionsBasket model module.
 * @module model/SmartTransactionsBasket
 */
export default class SmartTransactionsBasket {
    /**
     * Constructs a new <code>SmartTransactionsBasket</code>.
     * @alias module:model/SmartTransactionsBasket
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsBasket</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasket} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasket} The populated <code>SmartTransactionsBasket</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBasket();
            
            
            
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [SmartTransactionsBasketProduct]);
            }
            if (data.hasOwnProperty('texts')) {
                obj['texts'] = ApiClient.convertToType(data['texts'], [SmartTransactionsBasketText]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Products
     * @member {Array.<module:model/SmartTransactionsBasketProduct>} products
     */
    products = undefined;

    /**
     * Texts
     * @member {Array.<module:model/SmartTransactionsBasketText>} texts
     */
    texts = undefined;

    /**
     * Basket Type
     * @member {String} type
     */
    type = undefined;

}
