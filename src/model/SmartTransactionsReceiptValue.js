
import ApiClient from '../ApiClient';





/**
* The SmartTransactionsReceiptValue model module.
* @module model/SmartTransactionsReceiptValue
* @version 2.0.0
*/
export default class SmartTransactionsReceiptValue {
    /**
    * Constructs a new <code>SmartTransactionsReceiptValue</code>.
    * @alias module:model/SmartTransactionsReceiptValue
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsReceiptValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsReceiptValue} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsReceiptValue} The populated <code>SmartTransactionsReceiptValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsReceiptValue();

            
            
            

            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * Caption
    * @member {String} caption
    */
    caption = undefined;
    /**
    * Text
    * @member {String} text
    */
    text = undefined;
    /**
    * Name
    * @member {String} name
    */
    name = undefined;
    /**
    * Value
    * @member {String} value
    */
    value = undefined;








}


