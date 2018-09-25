
import ApiClient from '../ApiClient';
import SmartTransactionsProductModel from './SmartTransactionsProductModel';





/**
* The SmartTransactionsList model module.
* @module model/SmartTransactionsList
*/
export default class SmartTransactionsList {
    /**
    * Constructs a new <code>SmartTransactionsList</code>.
    * @alias module:model/SmartTransactionsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsList} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsList} The populated <code>SmartTransactionsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SmartTransactionsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing smart transactions
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Smart/Transactions
    * @member {Array.<module:model/SmartTransactionsProductModel>} data
    */
    data = undefined;








}


