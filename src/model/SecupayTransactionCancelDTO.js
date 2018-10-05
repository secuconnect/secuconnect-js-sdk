
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionCancelDTO model module.
* @module model/SecupayTransactionCancelDTO
*/
export default class SecupayTransactionCancelDTO {
    /**
    * Constructs a new <code>SecupayTransactionCancelDTO</code>.
    * @alias module:model/SecupayTransactionCancelDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionCancelDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionCancelDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionCancelDTO} The populated <code>SecupayTransactionCancelDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionCancelDTO();

            
            
            

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], Object);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('reduce_stakeholder_payment')) {
                obj['reduce_stakeholder_payment'] = ApiClient.convertToType(data['reduce_stakeholder_payment'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The payment contract object
    * @member {Object} contract
    */
    contract = undefined;
    /**
    * partial or full refund amount, \"0\" means full refund
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * Mixed-Basket: (percentage) reduce the stakeholder amount too
    * @member {Boolean} reduce_stakeholder_payment
    * @default false
    */
    reduce_stakeholder_payment = false;








}


