
import ApiClient from '../ApiClient';





/**
* The SmartTransactionsBasketInfo model module.
* @module model/SmartTransactionsBasketInfo
* @version 2.0.0
*/
export default class SmartTransactionsBasketInfo {
    /**
    * Constructs a new <code>SmartTransactionsBasketInfo</code>.
    * @alias module:model/SmartTransactionsBasketInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsBasketInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketInfo} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketInfo} The populated <code>SmartTransactionsBasketInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBasketInfo();

            
            
            

            if (data.hasOwnProperty('sum')) {
                obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');
            }
            if (data.hasOwnProperty('gratuity')) {
                obj['gratuity'] = ApiClient.convertToType(data['gratuity'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
    * Sum
    * @member {Number} sum
    */
    sum = undefined;
    /**
    * Gratuity
    * @member {Number} gratuity
    */
    gratuity = undefined;
    /**
    * Currency
    * @member {String} currency
    */
    currency = undefined;








}


