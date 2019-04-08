
import ApiClient from '../ApiClient';

/**
 * The SmartTransactionsBonusProducts model module.
 * @module model/SmartTransactionsBonusProducts
 */
export default class SmartTransactionsBonusProducts {
    /**
     * Constructs a new <code>SmartTransactionsBonusProducts</code>.
     * @alias module:model/SmartTransactionsBonusProducts
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsBonusProducts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBonusProducts} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBonusProducts} The populated <code>SmartTransactionsBonusProducts</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBonusProducts();
            
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('priceOne')) {
                obj['priceOne'] = ApiClient.convertToType(data['priceOne'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
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
        }
        return obj;
    }

    /**
     * Bonus Product ID
     * @member {Number} id
     */
    id = undefined;

    /**
     * Tax
     * @member {Number} tax
     */
    tax = undefined;

    /**
     * price of one bonus product
     * @member {Number} priceOne
     */
    priceOne = undefined;

    /**
     * amount of bonus products
     * @member {Number} quantity
     */
    quantity = undefined;

    /**
     * description
     * @member {String} desc
     */
    desc = undefined;

    /**
     * article Number
     * @member {String} articleNumber
     */
    articleNumber = undefined;

    /**
     * ean
     * @member {String} ean
     */
    ean = undefined;

}
