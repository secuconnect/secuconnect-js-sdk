
import ApiClient from '../ApiClient';
import ReceiptType from './ReceiptType';
import ReceiptValue from './ReceiptValue';





/**
* The ReceiptTypeValue model module.
* @module model/ReceiptTypeValue
*/
export default class ReceiptTypeValue {
    /**
    * Constructs a new <code>ReceiptTypeValue</code>.
    * @alias module:model/ReceiptTypeValue
    * @class
    * @implements module:model/ReceiptType
    */

    constructor() {
        

        
        ReceiptType.call(this);

        

        
    }

    /**
    * Constructs a <code>ReceiptTypeValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReceiptTypeValue} obj Optional instance to populate.
    * @return {module:model/ReceiptTypeValue} The populated <code>ReceiptTypeValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptTypeValue();

            
            
            ReceiptType.constructFromObject(data, obj);

            if (data.hasOwnProperty('value')) {
                obj['value'] = ReceiptValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
    * Value object
    * @member {module:model/ReceiptValue} value
    */
    value = undefined;


    // Implement ReceiptType interface:
    /**
    * Type
    * @member {String} type
    */
    type = undefined;







}


