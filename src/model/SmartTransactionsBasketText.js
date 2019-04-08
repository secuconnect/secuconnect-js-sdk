
import ApiClient from '../ApiClient';

/**
 * The SmartTransactionsBasketText model module.
 * @module model/SmartTransactionsBasketText
 */
export default class SmartTransactionsBasketText {
    /**
     * Constructs a new <code>SmartTransactionsBasketText</code>.
     * @alias module:model/SmartTransactionsBasketText
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsBasketText</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketText} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketText} The populated <code>SmartTransactionsBasketText</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBasketText();
            
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
        }
        return obj;
    }

    /**
     * Text id
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

}
