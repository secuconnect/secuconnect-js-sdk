
import ApiClient from '../ApiClient';
import SmartTransactionsBonusProducts from './SmartTransactionsBonusProducts';





/**
* The SmartTransactionsPreTransactionModel model module.
* @module model/SmartTransactionsPreTransactionModel
*/
export default class SmartTransactionsPreTransactionModel {
    /**
    * Constructs a new <code>SmartTransactionsPreTransactionModel</code>.
    * @alias module:model/SmartTransactionsPreTransactionModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsPreTransactionModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsPreTransactionModel} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsPreTransactionModel} The populated <code>SmartTransactionsPreTransactionModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsPreTransactionModel();

            
            
            

            if (data.hasOwnProperty('missing_sum')) {
                obj['missing_sum'] = ApiClient.convertToType(data['missing_sum'], 'Number');
            }
            if (data.hasOwnProperty('bonus_products')) {
                obj['bonus_products'] = ApiClient.convertToType(data['bonus_products'], [SmartTransactionsBonusProducts]);
            }
        }
        return obj;
    }

    /**
    * missing sum
    * @member {Number} missing_sum
    */
    missing_sum = undefined;
    /**
    * SmartTransactionsPreTransactionModel
    * @member {Array.<module:model/SmartTransactionsBonusProducts>} bonus_products
    */
    bonus_products = undefined;








}


