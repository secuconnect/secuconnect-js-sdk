
import ApiClient from '../ApiClient';





/**
* The ReceiptValue model module.
* @module model/ReceiptValue
*/
export default class ReceiptValue {
    /**
    * Constructs a new <code>ReceiptValue</code>.
    * @alias module:model/ReceiptValue
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ReceiptValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReceiptValue} obj Optional instance to populate.
    * @return {module:model/ReceiptValue} The populated <code>ReceiptValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptValue();

            
            
            

            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('decoration')) {
                obj['decoration'] = ApiClient.convertToType(data['decoration'], ['String']);
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
    * Name
    * @member {String} name
    */
    name = undefined;
    /**
    * Value
    * @member {String} value
    */
    value = undefined;
    /**
    * Text
    * @member {String} text
    */
    text = undefined;
    /**
    * Decoration
    * @member {Array.<String>} decoration
    */
    decoration = undefined;








}


