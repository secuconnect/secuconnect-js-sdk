
import ApiClient from '../ApiClient';





/**
* The SmartTransactionsBasketProductGroup model module.
* @module model/SmartTransactionsBasketProductGroup
*/
export default class SmartTransactionsBasketProductGroup {
    /**
    * Constructs a new <code>SmartTransactionsBasketProductGroup</code>.
    * @alias module:model/SmartTransactionsBasketProductGroup
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsBasketProductGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketProductGroup} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketProductGroup} The populated <code>SmartTransactionsBasketProductGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsBasketProductGroup();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Group id
    * @member {String} id
    */
    id = undefined;
    /**
    * Desc
    * @member {String} desc
    */
    desc = undefined;
    /**
    * Level
    * @member {Number} level
    */
    level = undefined;








}


