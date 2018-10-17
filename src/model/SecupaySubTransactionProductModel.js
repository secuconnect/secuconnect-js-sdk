
import ApiClient from '../ApiClient';





/**
* The SecupaySubTransactionProductModel model module.
* @module model/SecupaySubTransactionProductModel
*/
export default class SecupaySubTransactionProductModel {
    /**
    * Constructs a new <code>SecupaySubTransactionProductModel</code>.
    * @alias module:model/SecupaySubTransactionProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupaySubTransactionProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupaySubTransactionProductModel} obj Optional instance to populate.
    * @return {module:model/SecupaySubTransactionProductModel} The populated <code>SecupaySubTransactionProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupaySubTransactionProductModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('trans_id')) {
                obj['trans_id'] = ApiClient.convertToType(data['trans_id'], 'Number');
            }
            if (data.hasOwnProperty('reference_id')) {
                obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The payment id of the sub-transaction
    * @member {String} id
    */
    id = undefined;
    /**
    * Transaction identifier
    * @member {Number} trans_id
    */
    trans_id = undefined;
    /**
    * Reference id - which was used in the mixed basket
    * @member {String} reference_id
    */
    reference_id = undefined;








}


